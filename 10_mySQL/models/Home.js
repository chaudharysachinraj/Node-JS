const Favourite = require('./favourite');
const airbnbDB = require('../util/database-util')



const registeredHomes = [];

module.exports = class Home {
    constructor(houseName, price, location, rating, photoUrl, description){
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
        this.description = description;
    }
 
    save(){        
        // return airbnbDB.execute(`INSERT INTO homes (houseName, price, location, rating, photoUrl, description) VALUES ('${this.houseName}', ${this.price}, '${this.location}', ${this.rating}, '${this.photoUrl}', '${this.description}')`);

        
        return airbnbDB.execute(`INSERT INTO homes (houseName, price, location, rating, photoUrl, description) VALUES(?, ?, ?, ?, ?, ?)`, [this.houseName, this.price, this.location, this.rating, this.photoUrl, this.description]); 
            
    }  

    static fetchAll(){     
        return airbnbDB.execute('SELECT * FROM homes');
    }

    static findById(homeId, callback){
        return airbnbDB.execute('SELECT * FROM homes WHERE id = ?', [homeId]);
       
    }
    
    static DeleteById(homeId, callback){
        return airbnbDB.execute('DELETE FROM homes WHERE id = ?', [homeId]);
    }
}



