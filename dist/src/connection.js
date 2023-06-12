"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var pg_1 = require("pg");
exports.client = new pg_1.Client({
    user: 'postgres',
    password: process.env.DBPASSWORD,
    database: 'blockbusterdb',
    port: 5432,
    host: '34.73.51.4'
});
exports.client.connect();
