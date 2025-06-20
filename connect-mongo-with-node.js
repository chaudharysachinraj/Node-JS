const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const databaseName =  'e-comm';
const client = new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    let db = result.db(databaseName);
    let collection = db.collection('students');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();