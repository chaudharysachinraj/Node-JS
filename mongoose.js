const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");

// 🔴 Define Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

// 🔴 --------------> Save In DB <-----------------
// 🔴 --------------> Save In DB <-----------------
const saveInDB = async () => {
  const Product = mongoose.model("products", productSchema);

  let data = new Product({
    name: "Oppo Mobile",
    price: 20000,
    brand: "Oppo",
    category: "mobile",
  });

  let result = await data.save();
  console.log(result);
};

// 🔴 --------------> Update In DB <-----------------
// 🔴 --------------> Update In DB <-----------------
const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);

  let data = await Product.updateOne(
    { name: "Oppo Mobile" },
    { $set: { price: 25000 } }
  );

  console.log(data);
};

// 🔴 --------------> Delete In DB <-----------------
// 🔴 --------------> Delete In DB <-----------------
const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let result = await Product.deleteOne({ name: "Oppo Mobile" });
  console.log("Deleted:", result);
};

// 🔴 --------------> Read In DB <-----------------
// 🔴 --------------> Read In DB <-----------------
const readInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.find();
  console.log("Read:", data);
};

// 🔁 Call functions here
// saveInDB();
// updateInDB();
// deleteInDB();
// readInDB();
 