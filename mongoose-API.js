const express = require("express");
require("./config");
const product = require("./product");

const app = express();
app.use(express.json());

//---------------> 🔹 POST API: Create Product <-----------------
//---------------> 🔹 POST API: Create Product <-----------------
app.post("/create", async (req, resp) => {
  let data = new product(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});

//---------------> 🔹 GET API: Get All Products <-----------------
//---------------> 🔹 GET API: Get All Products <-----------------
app.get("/list", async (req, resp) => {
  let data = await product.find();
  console.log(data);
  resp.send(data);
});

//---------------> 🔹 DELETE API: Delete Product by ID <-----------------
//---------------> 🔹 DELETE API: Delete Product by ID <-----------------
app.delete("/delete/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await product.deleteOne(
    req.params
);
  resp.send(data);
});

//---------------> 🔹 PUT API: Update Product <----------------
//---------------> 🔹 PUT API: Update Product <----------------
app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await product.updateOne(
    req.params,
    { $set: req.body }
);
  resp.send(data);
});


app.listen(5000);
