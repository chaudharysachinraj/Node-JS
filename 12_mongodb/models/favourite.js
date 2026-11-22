const { getDb } = require("../util/database-util");
const { ObjectId } = require("mongodb");

module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = new ObjectId(String(homeId));
  }

  save() {
    const db = getDb();
    return db.collection("favourites").insertOne(this);
  }

  static fetchAll() {
    const db = getDb();
    return db.collection("favourites").find().toArray();
  }

  static deleteById(homeId, callback) {
    const db = getDb();
    const operation = db.collection("favourites").deleteOne({
      homeId: new ObjectId(String(homeId)),
    });

    if (typeof callback === "function") {
      operation.then(() => callback()).catch(callback);
    }

    return operation;
  }
};
