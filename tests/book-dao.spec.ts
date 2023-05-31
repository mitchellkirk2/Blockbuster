import { MovieDAO } from "../src/daos/movie-dao";
import { Movie } from "../src/entities";
import { MovieDaoTextFile } from "./movie-dao-textfile-impl";

const movieDAO:MovieDAO = new MovieDaoTextFile();

const testMovie:Movie = new Movie(0, 'Titanic', 'James Cameron', true, 1);


test("Create a movie", async ()=> {
    const result:Movie = await movieDAO.createMovie(testMovie);
    console.log(result);
    expect(result.movieId).not.toBe(0);
});

// An integration test requires that two or more functoins you wrote pass

test("Get movie by ID", async () =>{
    let movie:Movie = new Movie(0, "Titanic", "James Cameron", true, 1);
    movie = await movieDAO.createMovie(movie);

    let retrievedMovie:Movie = await movieDAO.getMovieById(movie.movieId);
    expect(retrievedMovie.title).toBe(movie.title);
});

test("Get all movies", async () =>{
    let movie1:Movie = new Movie(0, "Avatar", "James Cameron", true, 0);
    let movie2:Movie = new Movie(0, "The Wolf of Wall Street", "Martin Scorsese", true, 0);

    await movieDAO.createMovie(movie1);
    await movieDAO.createMovie(movie2);

    const movies:Movie[] = await movieDAO.getAllMovies();
    expect(movies.length).toBeGreaterThanOrEqual(2);
});