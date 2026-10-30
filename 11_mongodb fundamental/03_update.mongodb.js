use('ecommerce');

// db.products.updateOne(
// { name: "Wireless Mouse" },
// { $set: { price: 899 } }
// )


// db.products.updateMany(
// { category: "Electronics" },
// { $inc: { stock: 10 } }
// )


// Using $push to Add to Arrays
db.products.updateOne(
{ name: "Wireless Mouse" },
{ $push: { tags: "new" } }
)
