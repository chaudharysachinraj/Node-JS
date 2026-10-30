use('ecommerce');

// Drop the database
// db.dropDatabase();

db.products.insertMany([
{
 name: "Wireless Mouse",
 price: 799,
 category: "Electronics",
 ck: 120,
 ratings: 4.5,
 tags: ["computer", "accessory", "wireless"],
 createdAt: new Date()
},
{
 name: "Mechanical Keyboard",
 price: 2499,
 category: "Electronics",
 stock: 80,
 ratings: 4.8,
 tags: ["keyboard", "mechanical"],
 createdAt: new Date()
},
{
 name: "Gaming Laptop",
 price: 85999,
 category: "Computers",
 stock: 30,
 ratings: 4.6,
 tags: ["gaming", "laptop"],
 createdAt: new Date()
}
])



db.contacts.insertMany([
{ name: "Alice", message: "Loved your website!", phone: "9876543210", createdAt:
new Date() },
{ name: "Bob", message: "Do you have discounts on laptops?", phone: "9123456789",
createdAt: new Date() },
{ name: "Carol", message: "I want to cancel my order.", phone: "9988776655",
createdAt: new Date() }
])
