const Home = require("../models/Home");

exports.getAddHome = (req, res, next) => {
    res.render("host/add-home", { pageTittle: 'Add Home' });
}

exports.postAddHome = (req, res, next) => {

  const {houseName, price, location, rating, photoUrl} = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl);

  newHome.save(error => {
    if(error){
      res.redirect('/');
    }else{
    res.render("host/home-added", { pageTittle: 'Home Added' });
    }
  });
}



// _____________________________________________________________
// const {houseName, price, location, rating, photoUrl} = req.body;
//                or 
// -----------------------------------------------
// const {houseName} = req.body;
//              or  
// const houseName = req.body.houseName;
// const price = req.body.price; 
// const location = req.body.location;
// const rating = req.body.rating;
// const photoUrl = req.body.photoUrl;
// -----------------------------------------------
// _____________________________________________________________