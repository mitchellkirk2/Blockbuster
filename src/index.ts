import express from 'express';
import MovieService from './services/movie-service';
import { MovieServiceImpl } from './services/movie-service-impl';
import { Movie } from './entities';
import { MissingResourceError } from './errors';

const app = express();
app.use(express.json());

// Our application routes should use services we create to do the heavy lifting.
// Try to minimize the amount of logic in your routes that is NOT related directly to HTTP requests.

const movieService:MovieService = new MovieServiceImpl();

app.get("/movies", async (req, res)=> {
    const movies:Movie[] = await movieService.retrieveAllMovies();
    res.send(movies);
});

app.get("/movies/:id", async (req, res)=>{
    try{
        const movieId = Number(req.params.id);
        const movie:Movie = await movieService.retrieveMovieById(movieId);
        res.send(movie); 
    } catch(error){
        if(error instanceof MissingResourceError){
            res.status(404);
            res.send(error);
        }
    }
});

app.post("/movies", async (req, res) =>{
    let movie:Movie = req.body;
    movieService.registerMovie(movie);
    res.send(movie);
    res.status(201);
});

app.patch("/movies/:id/checkout", async (req, res)=>{
    const movieId = Number(req.params.id);
    const movie = await movieService.checkoutMovieById(movieId);
    res.send(movie);
});

app.delete("/movies/:id", async (req, res) =>{
    const movieId = Number(req.params.id);
    const result = await movieService.removeMovieById(movieId);
    res.send(result);
});

app.listen(3000,()=>{console.log("Application started")});