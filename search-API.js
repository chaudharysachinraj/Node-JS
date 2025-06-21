const express = require("express");
require("./config");
const product = require("./product");

const app = express();
app.use(express.json());

app.get("/search/:key", async(req, resp) => {
    console.log(req.params.key);
    let data =await product.find(
        {
            "$or":[
                { name: { $regex: req.params.key } },
                { brand: { $regex: req.params.key } },
                { category: { $regex: req.params.key } }

            ]
        }
    );
    resp.send(data)
    console.log(data);
})

app.listen(5000);
