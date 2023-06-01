import { Movie } from "../entities";

export interface MovieDAO{
    //create
    createMovie(movie:Movie):Promise<Movie>;
    //read
    getAllMovies():Promise<Movie[]>;
    getMovieById(movieId:number):Promise<Movie>;
    //update
    updateMovie(movie:Movie):Promise<Movie>;
    //delete
    deleteMovieById(movieId:number):Promise<boolean>;
}