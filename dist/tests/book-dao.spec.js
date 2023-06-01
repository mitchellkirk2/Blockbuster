"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var entities_1 = require("../src/entities");
var movie_dao_textfile_impl_1 = require("./movie-dao-textfile-impl");
var movieDAO = new movie_dao_textfile_impl_1.MovieDaoTextFile();
var testMovie = new entities_1.Movie(0, 'Titanic', 'James Cameron', true, 1);
test("Create a movie", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, movieDAO.createMovie(testMovie)];
            case 1:
                result = _a.sent();
                expect(result.movieId).not.toBe(0);
                return [2 /*return*/];
        }
    });
}); });
// An integration test requires that two or more functions you wrote pass
test("Get movie by ID", function () { return __awaiter(void 0, void 0, void 0, function () {
    var movie, retrievedMovie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                movie = new entities_1.Movie(0, "Interstellar", "Christopher Nolan", true, 1);
                return [4 /*yield*/, movieDAO.createMovie(movie)];
            case 1:
                movie = _a.sent();
                return [4 /*yield*/, movieDAO.getMovieById(movie.movieId)];
            case 2:
                retrievedMovie = _a.sent();
                expect(retrievedMovie.title).toBe(movie.title);
                return [2 /*return*/];
        }
    });
}); });
test("Get all movies", function () { return __awaiter(void 0, void 0, void 0, function () {
    var movie1, movie2, movies;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                movie1 = new entities_1.Movie(0, "Avatar", "James Cameron", true, 0);
                movie2 = new entities_1.Movie(0, "The Wolf of Wall Street", "Martin Scorsese", true, 0);
                return [4 /*yield*/, movieDAO.createMovie(movie1)];
            case 1:
                _a.sent();
                return [4 /*yield*/, movieDAO.createMovie(movie2)];
            case 2:
                _a.sent();
                return [4 /*yield*/, movieDAO.getAllMovies()];
            case 3:
                movies = _a.sent();
                expect(movies.length).toBeGreaterThanOrEqual(2);
                return [2 /*return*/];
        }
    });
}); });
test("Update movie", function () { return __awaiter(void 0, void 0, void 0, function () {
    var movie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                movie = new entities_1.Movie(0, "The Count of Monte Cristo", "Kevin Reynolds", true, 0);
                return [4 /*yield*/, movieDAO.createMovie(movie)];
            case 1:
                _a.sent();
                movie.inStock = false;
                return [4 /*yield*/, movieDAO.updateMovie(movie)];
            case 2:
                movie = _a.sent();
                expect(movie.inStock).toBe(false);
                return [2 /*return*/];
        }
    });
}); });
test("Delete movie by ID", function () { return __awaiter(void 0, void 0, void 0, function () {
    var movie, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                movie = new entities_1.Movie(0, "Monte Python and the Holy Grail", "Terry Gilliam", true, 0);
                return [4 /*yield*/, movieDAO.createMovie(movie)];
            case 1:
                movie = _a.sent();
                return [4 /*yield*/, movieDAO.deleteMovieById(movie.movieId)];
            case 2:
                result = _a.sent();
                expect(result).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
