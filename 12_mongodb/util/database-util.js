const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://sachin:Sachin2926@airbnb.vvwsegc.mongodb.net/";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      console.log("Client");
      _db = client.db("airbnb");
      callback();
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};


const getDb = () => {
  if (!_db) {
      throw new Error("Could not connect to DB.");
} else {
      return _db;
  } 
}

exports.getDb = getDb;
exports.mongoConnect = mongoConnect;
