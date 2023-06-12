import {client} from '../src/connection'

// Client is the main object we will use to interact with our database

test("Should create a connection", async()=>{
    const result = await client.query('select * from movie');
    //fetching data stored on a database in the cloud
    console.log(result);
});