const { getDb } = require('../util/database-util');
const { ObjectId } = require('mongodb');



const registeredHomes = [];

module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl, description, _id){
        this
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
        this.description = description;
        if(_id){
            this._id = new ObjectId(String(_id));
        }
    }
 
    save(){         
         const db = getDb();
         if (this._id){ //update
            console.log("Came to update");
            return db.collection('homes').updateOne(
                {_id: this._id}, 
                {$set: this})
         }else{ //insert
            console.log("Came to insert");
            return db.collection('homes').insertOne(this)
         }
    }  


    static fetchAll(){     
        const db = getDb();
        return db.collection('homes').find().toArray();
    }
    

    static findById(homeId){
        console.log("Came to fetch ", homeId);
        const db = getDb();
        return db.collection('homes').find({_id: new ObjectId(String(homeId))}).next();
    }


    static DeleteById(homeId){
        const db = getDb();
        return db.collection('homes').deleteOne({_id: new ObjectId(String(homeId))});
    }
}


