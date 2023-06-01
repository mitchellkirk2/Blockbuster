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

    checkoutMovieById(movieId: number): Promise<boolean> {
        let movie:Movie = await this.movieDAO.getMovieById(movieId);
        
    }

    checkInMovieById(movieId: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    searchByTitle(title: string): Promise<Movie> {
        throw new Error("Method not implemented.");
    }

    modifyMovie(movie: Movie): Promise<Movie> {
        throw new Error("Method not implemented.");
    }

    removeMovieById(movieId: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}