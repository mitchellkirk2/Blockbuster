import express from 'express';
import MovieService from './services/movie-service';
import { MovieServiceImpl } from './services/movie-service-impl';
import { Movie } from './entities';

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
    const movieId = Number(req.params.id);
    const movie:Movie = await movieService.retrieveMovieById(movieId);
    res.send(movie);
});

app.post("/movies", async (req, res) =>{
    let movie:Movie = req.body;
    movieService.registerMovie(movie);
    res.send(movie);
});

app.listen(3000,()=>{console.log("Application started")});