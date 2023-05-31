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
    async getAllMovies(): Promise<Movie[]> {
        const fileData:Buffer = await readFile('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt');
        const textData:string = fileData.toString();
        const movies:Movie[] = JSON.parse(textData);
        return movies;        
    }
    async getMovieById(movieId: number): Promise<Movie> {
        const fileData:Buffer = await readFile('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt');
        const textData:string = fileData.toString();
        const movies:Movie[] = JSON.parse(textData);
        for(const movie of movies){
            if(movie.movieId === movieId){
                return  movie;
            } 
        }
    }
    async updateMovie(movie: Movie): Promise<Movie> {
        const fileData:Buffer = await readFile('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt');
        const textData:string = fileData.toString();
        const movies:Movie[] = JSON.parse(textData);
        for(let i=0;i<movies.length;i++){
            if(movies[i].movieId === movie.movieId){
                movies[i] = movie;
            }
        }
        await writeFile('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt', JSON.stringify(movie));
        return movie;
        
    }
    deleteMovieById(movieId: number): boolean {
        const fileData:Buffer = await readFile('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt');
        const textData:string = fileData.toString();
        const movies:Movie[] = JSON.parse(textData);
        for(let i=0;i<movies.length;i++){
            if(movies[i].movieId === movieId){
                delete movies[i];
            }
        }
        await writeFile('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt', JSON.stringify(movies));
        return true;
    }   
}