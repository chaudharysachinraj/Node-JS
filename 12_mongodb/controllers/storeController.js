const Home  = require("../models/Home");
const Favourite = require("../models/favourite");

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then(registeredHomes => { 
    res.render("store/index", { 
      homes: registeredHomes, 
      pageTittle: 'Hamara airbnb' 
    });
  });
} 



exports.getHomes = (req, res, next) => {
  Home.fetchAll().then(registeredHomes => { 
    res.render("store/homes", { homes: registeredHomes, pageTittle: 'Hamara airbnb' 
    }); 
  });
}

exports.getFavourites = (req, res, next) => {
  Favourite.fetchAll().then(favouriteIds => {
    Home.fetchAll().then(registeredHomes => { 
       const favouriteHomeIds = new Set(
        favouriteIds.map(favourite => favourite.homeId.toString())
      );
      const favouriteHomes = registeredHomes.filter(home =>
        favouriteHomeIds.has(home._id.toString())
      );
      
      res.render("store/favourites", { homes: favouriteHomes, pageTittle: 'Favourites' }); 
    });
  });
}
    

exports.postAddFavourites = (req, res, next) => {
  const homeId = req.body.homeId;
  const fav = new Favourite(homeId);
  fav.save().then(() => {
    res.redirect("/favourites");
  }).catch(err => {
    console.error("Error while adding to favourites:", err);
    res.redirect("/favourites");
  });
};


exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId)
    .then(() => {
      res.redirect("/favourites");
    })
    .catch(error => {
      console.error("Error while removing from favourites:", error);
      res.redirect("/favourites");
    });
} 


exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeIdentity;
  Home.findById(homeId).then(home => {
    if (!home) { 
      console.log("Home not found");
      return res.redirect("/homes");
    }
      res.render("store/home-detail", { pageTittle: "Home Details", home: home });
  })
};   