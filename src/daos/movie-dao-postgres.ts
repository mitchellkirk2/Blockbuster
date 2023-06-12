import { Movie } from "../entities";
import { MovieDAO } from "./movie-dao";
import {client} from '../connection';
import { MissingResourceError } from "../errors";


export class MovieDaoPostgres implements MovieDAO{

    async createMovie(movie: Movie): Promise<Movie> {
        const sql:string = "insert into movie (movie_id, title, director, in_stock, return_date) values ($1,$2,$3,$4,$5) returning movie_id";
        const values = [movie.movieId,movie.title,movie.director,movie.inStock,movie.returnDate];
        const result = await client.query(sql, values);
        movie.movieId = result.rows[0].movie_id;
        return movie;
    }
    async getAllMovies(): Promise<Movie[]> {
        const sql:string = "select * from movie";
        const result = await client.query(sql);
        const movies:Movie[] = [];
        for(const row of result.rows){
            const movie:Movie = new Movie(row.movie_id, row.title, row.director, row.in_stock, row.return_date);
            movies.push(movie);
        }
        return movies;
    }
    async getMovieById(movieId: number): Promise<Movie> {
        const sql:string = "select * from movie where movie_id = $1";
        const values = [movieId];
        const result = await client.query(sql, values);
        const row = result.rows[0];
        const movie:Movie = new Movie(row.movie_id, row.title, row.director, row.in_stock, row.return_date);
        return movie;
    }
    async updateMovie(movie: Movie): Promise<Movie> {
        const sql:string = "update movie set movie_id=$1, title=$2, director=$3, in_stock=$4, return_date=$5 where movie_id =$1";
        const values = [movie.movieId,movie.title,movie.director,movie.inStock,movie.returnDate];
        const result = await client.query(sql, values);
        if(result.rowCount === 0){
            throw new MissingResourceError(`The movie with Id of ${movie.movieId} could not be found.`);
        }
        return movie;
    }
    async deleteMovieById(movieId: number): Promise<boolean> {
        const sql:string = 'delete from movie where movie_id = $1';
        const values = [movieId];
        const result = await client.query(sql, values);
        if(result.rowCount === 0){
            throw new MissingResourceError(`The movie with id ${movieId} could not be found`);
        }
        return true;
    }
    
}