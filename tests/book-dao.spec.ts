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