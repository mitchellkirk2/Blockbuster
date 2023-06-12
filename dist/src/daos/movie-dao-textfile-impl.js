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
exports.MovieDaoTextFile = void 0;
var promises_1 = require("fs/promises");
var errors_1 = require("../errors");
var MovieDaoTextFile = /** @class */ (function () {
    function MovieDaoTextFile() {
    }
    MovieDaoTextFile.prototype.createMovie = function (movie) {
        return __awaiter(this, void 0, void 0, function () {
            var fileData, textData, movies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, promises_1.readFile)('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt')];
                    case 1:
                        fileData = _a.sent();
                        textData = fileData.toString();
                        movies = [];
                        if (textData) {
                            try {
                                movies = JSON.parse(textData); // take the JSON text and turn it into an object
                            }
                            catch (error) {
                                console.error('Invalid JSON data in movies.txt file');
                            }
                        }
                        movie.movieId = Math.round(Math.random() * 1000);
                        movies.push(movie); // add movie to the array
                        return [4 /*yield*/, (0, promises_1.writeFile)('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt', JSON.stringify(movies))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, movie];
                }
            });
        });
    };
    MovieDaoTextFile.prototype.getAllMovies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fileData, textData, movies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, promises_1.readFile)('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt')];
                    case 1:
                        fileData = _a.sent();
                        textData = fileData.toString();
                        movies = JSON.parse(textData);
                        return [2 /*return*/, movies];
                }
            });
        });
    };
    MovieDaoTextFile.prototype.getMovieById = function (movieId) {
        return __awaiter(this, void 0, void 0, function () {
            var fileData, textData, movies, _i, movies_1, movie;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, promises_1.readFile)('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt')];
                    case 1:
                        fileData = _a.sent();
                        textData = fileData.toString();
                        movies = JSON.parse(textData);
                        for (_i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
                            movie = movies_1[_i];
                            if (movie.movieId === movieId) {
                                return [2 /*return*/, movie];
                            }
                        }
                        throw new errors_1.MissingResourceError("The movie with id".concat(movieId, " could not be located"));
                }
            });
        });
    };
    MovieDaoTextFile.prototype.getMovieByTitle = function (movieTitle) {
        return __awaiter(this, void 0, void 0, function () {
            var fileData, textData, movies, _i, movies_2, movie;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, promises_1.readFile)('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt')];
                    case 1:
                        fileData = _a.sent();
                        textData = fileData.toString();
                        movies = JSON.parse(textData);
                        for (_i = 0, movies_2 = movies; _i < movies_2.length; _i++) {
                            movie = movies_2[_i];
                            if (movie.title === movieTitle) {
                                return [2 /*return*/, movie];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MovieDaoTextFile.prototype.updateMovie = function (movie) {
        return __awaiter(this, void 0, void 0, function () {
            var fileData, textData, movies, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, promises_1.readFile)('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt')];
                    case 1:
                        fileData = _a.sent();
                        textData = fileData.toString();
                        movies = JSON.parse(textData);
                        for (i = 0; i < movies.length; i++) {
                            if (movies[i].movieId === movie.movieId) {
                                movies[i] = movie;
                            }
                        }
                        return [4 /*yield*/, (0, promises_1.writeFile)('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt', JSON.stringify(movies))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, movie];
                }
            });
        });
    };
    MovieDaoTextFile.prototype.deleteMovieById = function (movieId) {
        return __awaiter(this, void 0, void 0, function () {
            var fileData, textData, movies, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, promises_1.readFile)('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt')];
                    case 1:
                        fileData = _a.sent();
                        textData = fileData.toString();
                        movies = JSON.parse(textData);
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < movies.length)) return [3 /*break*/, 5];
                        if (!(movies[i].movieId === movieId)) return [3 /*break*/, 4];
                        movies.splice(i);
                        return [4 /*yield*/, (0, promises_1.writeFile)('C:\\Users\\Mitchell\\Desktop\\Blockbuster\\movies.txt', JSON.stringify(movies))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, false];
                }
            });
        });
    };
    return MovieDaoTextFile;
}());
exports.MovieDaoTextFile = MovieDaoTextFile;
