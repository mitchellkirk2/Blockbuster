import { MovieDAO } from "../src/daos/movie-dao";
import { Movie } from "../src/entities";
import { readFile, writeFile } from 'fs/promises';


export class MovieDaoTextFile implements MovieDAO{
    async createMovie(movie: Movie): Promise<Movie> {
        const fileData = await readFile('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt');
        const textData:string = fileData.toString(); // turn file into character data
        const movies:Movie[] = JSON.parse(textData); //take the JSON text and turn it into an object
        movie.movieId = Math.round(Math.random()*1000);
        movies.push(movie); // add movie to the array
        await writeFile('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt', JSON.stringify(movies));
        return movie;
    }
    getAllMovies(): Promise<Movie[]> {
        throw new Error("Method not implemented.");
    }
    getMovieById(movieId: number): Promise<Movie> {
        throw new Error("Method not implemented.");
    }
    updateMovie(movie: Movie): Promise<Movie> {
        throw new Error("Method not implemented.");
    }
    deleteMovieById(movieId: number): boolean {
        throw new Error("Method not implemented.");
    }   
}