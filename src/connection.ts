import {Client} from 'pg';

export const client = new Client({
    user:'postgres',
    password:process.env.DBPASSWORD,
    database:'blockbusterdb',
    port:5432,
    host:'34.73.51.4'
});
client.connect();