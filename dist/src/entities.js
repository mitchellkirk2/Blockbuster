"use strict";
// An entity is a class that stores information that will be persisted somewhere
// Usually have very minimal logic
// They should always have one field in them that is a unique identifier
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(movieId, title, director, inStock, returnDate) {
        this.movieId = movieId;
        this.title = title;
        this.director = director;
        this.inStock = inStock;
        this.returnDate = returnDate;
    }
    return Movie;
}());
exports.Movie = Movie;
