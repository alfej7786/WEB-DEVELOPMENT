// Importing MongoClient from mongodb driver
const { MongoClient } = require('mongodb');
 
// Connecting to a local port
const uri = 'mongodb://127.0.0.1:27017';
 
const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
 
connect();
 
// ESNext syntax using async-await
async function connect() {
    try {
        await client.connect();
        const db = client.db('fruitsdb');
        console.log(
    `Successfully connected to db ${db.databaseName}`);
    }
    catch (err) {
        console.error(`we encountered ${err}`);
    }
    finally {
        client.close();
    }
}