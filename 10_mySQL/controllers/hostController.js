const Home = require("../models/Home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", { editing : false, pageTittle: "Add Home" });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId; 
  const editing = req.query.editing === "true";
  if (!editing) {
      console.log("Editing flag not set properly");
      return res.redirect("/host/host-homes");
    }  
  
  Home.findById(homeId).then(([homes]) => {
    const home = homes[0];
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-homes");
    }
    console.log(homeId, editing, home);
    res.render("host/edit-home", { 
      home:home,
      editing: editing, 
      pageTittle: "Edit Your Home" 
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description } = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl, description);

  newHome.save().then(([rows]) => {
    res.render("host/home-added", {
      // home: newHome,
      // editing: false, 
      pageTittle: "Home Hosted"
    });
  });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl, description);
  newHome.id = id; // Assign the existing home ID to the newHome instance
  newHome.save((error) => {
    if (error) {
      console.log("Error saving edited home:", error);
    } else {
      res.redirect("/host/host-homes");
    }
  });
}

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.DeleteById(homeId).then(() => {
    res.redirect("/host/host-homes");
  });
}


exports.getHostHomes = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes]) => { 
    res.render("host/host-homes", {
      pageTittle: "Host Homes",
      homes: registeredHomes,
    });
  });
};
