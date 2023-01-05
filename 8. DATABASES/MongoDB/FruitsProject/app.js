// // Importing MongoClient from mongodb driver
// const { MongoClient } = require('mongodb');
 
// // Connecting to a local port
// const uri = 'mongodb://127.0.0.1:27017';
 
// const client = new MongoClient(uri, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// });
 
// connect();
 
// // ESNext syntax using async-await
// async function connect() {
//     try {
//         await client.connect();
//         const db = client.db('fruitsdb');
//         console.log(
//     `Successfully connected to db ${db.databaseName}`);
//     }
//     catch (err) {
//         console.error(`we encountered ${err}`);
//     }
//     finally {
//         client.close();
//     }
// }

const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
 
const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
 
connect();
 
async function connect() {
    try {
        await client.connect();
        const db = client.db('fruitsdb');
        console.log(
    `Successfully connected to db ${db.databaseName}`);
 
        const sportsCars = db.collection('fruits');
     
        // Insertion
        const cursorInsertion = await sportsCars.insertMany([
            {
                'name': 'Apple',
                'score': 8,
                'review': 'Great fruit'
            },
            {
                'name': 'Orange',
                'score': 6,
                'review': 'Kinda sour'
            },
            {
                'name': 'Banana',
                'score': 9,
                'review': 'Great stuff!'
            }]);
        console.log(cursorInsertion.insertedCount);
         
        // Display
        const cursorFind = sportsCars.find();
        const data = await cursorFind.toArray();
        console.table(data);
    }
    catch (err) {
        console.error(`we encountered ${err}`);
    }
    finally {
        client.close();
    }
}