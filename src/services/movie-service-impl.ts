import { MovieDaoTextFile } from "../../tests/movie-dao-textfile-impl";
import { MovieDAO } from "../daos/movie-dao";
import { Movie } from "../entities";
import MovieService from "./movie-service";


export class MovieServiceImpl implements MovieService {

    movieDAO:MovieDAO = new MovieDaoTextFile();

    registerMovie(movie: Movie): Promise<Movie> {
        return this.movieDAO.createMovie(movie);
    }

    retrieveAllMovies(): Promise<Movie[]> {
        return this.movieDAO.getAllMovies();
    }
    
    retrieveMovieById(movieId: number): Promise<Movie> {
        return this.movieDAO.getMovieById(movieId);
    }

    async checkoutMovieById(movieId: number): Promise<Movie> {
        let movie:Movie = await this.movieDAO.getMovieById(movieId);
        movie.inStock = false;
        movie.returnDate = Date.now() + 1_209_600;
        movie = await this.movieDAO.updateMovie(movie);
        return movie;   
    }

    async checkInMovieById(movieId: number): Promise<Movie> {
        let movie = await this.movieDAO.getMovieById(movieId);
        movie.inStock = true;
        movie = await this.movieDAO.updateMovie(movie);
        return movie;
    }

    searchByTitle(title: string): Promise<Movie> {
        throw new Error("Method not implemented.");
        // let movies:Movie[] = await this.movieDAO.getAllMovies();
        // let movie:Movie;
        // for(const elem in movies){
        //     if (elem.title === title)
        // }
    }

    async modifyMovie(movie: Movie): Promise<Movie> {
        return this.movieDAO.updateMovie(movie);
    }

    removeMovieById(movieId: number): Promise<boolean> {
        return this.movieDAO.deleteMovieById(movieId);
    }
}