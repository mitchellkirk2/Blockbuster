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
exports.MovieServiceImpl = void 0;
var movie_dao_textfile_impl_1 = require("../../tests/movie-dao-textfile-impl");
var MovieServiceImpl = /** @class */ (function () {
    function MovieServiceImpl() {
        this.movieDAO = new movie_dao_textfile_impl_1.MovieDaoTextFile();
    }
    MovieServiceImpl.prototype.registerMovie = function (movie) {
        return this.movieDAO.createMovie(movie);
    };
    MovieServiceImpl.prototype.retrieveAllMovies = function () {
        return this.movieDAO.getAllMovies();
    };
    MovieServiceImpl.prototype.retrieveMovieById = function (movieId) {
        return this.movieDAO.getMovieById(movieId);
    };
    MovieServiceImpl.prototype.checkoutMovieById = function (movieId) {
        return __awaiter(this, void 0, void 0, function () {
            var movie;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.movieDAO.getMovieById(movieId)];
                    case 1:
                        movie = _a.sent();
                        movie.inStock = false;
                        movie.returnDate = Date.now() + 1209600;
                        return [4 /*yield*/, this.movieDAO.updateMovie(movie)];
                    case 2:
                        movie = _a.sent();
                        return [2 /*return*/, movie];
                }
            });
        });
    };
    MovieServiceImpl.prototype.checkInMovieById = function (movieId) {
        return __awaiter(this, void 0, void 0, function () {
            var movie;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.movieDAO.getMovieById(movieId)];
                    case 1:
                        movie = _a.sent();
                        movie.inStock = true;
                        return [4 /*yield*/, this.movieDAO.updateMovie(movie)];
                    case 2:
                        movie = _a.sent();
                        return [2 /*return*/, movie];
                }
            });
        });
    };
    MovieServiceImpl.prototype.searchByTitle = function (title) {
        throw new Error("Method not implemented.");
        // let movies:Movie[] = await this.movieDAO.getAllMovies();
        // let movie:Movie;
        // for(const elem in movies){
        //     if (elem.title === title)
        // }
    };
    MovieServiceImpl.prototype.modifyMovie = function (movie) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.movieDAO.updateMovie(movie)];
            });
        });
    };
    MovieServiceImpl.prototype.removeMovieById = function (movieId) {
        return this.movieDAO.deleteMovieById(movieId);
    };
    return MovieServiceImpl;
}());
exports.MovieServiceImpl = MovieServiceImpl;
