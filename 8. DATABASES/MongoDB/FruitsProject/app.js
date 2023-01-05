const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "fruitsDB";

const client = new MongoClient(url);

client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected Successfully to Server");

    const db = client.db(dbName);

    client.close();
});