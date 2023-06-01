import { Movie } from "../entities";


export default interface MovieService{

    registerMovie(movie:Movie):Promise<Movie>;
    
    retrieveAllMovies():Promise<Movie[]>;

    retrieveMovieById(MovieId:number):Promise<Movie>;

    checkoutMovieById(MovieId:number):Promise<Movie>;

    checkInMovieById(MovieId:number):Promise<Movie>;

    searchByTitle(title:string):Promise<Movie>;

    modifyMovie(movie:Movie):Promise<Movie>;

    removeMovieById(MovieId:number):Promise<boolean>;
}