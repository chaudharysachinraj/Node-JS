// 1. Create (Insert Data)
db.students.insertOne({
    name: "Sachin",
    age: 20,
    course: "BCA",
    city: "Gurgaon"
});

// insertMany() – Inserts multiple documents.
db.students.insertMany([
    { name: "Rahul", age: 21, course: "BCA" },
    { name: "Aman", age: 22, course: "BBA" }
]);


// 2. Read (Find Data)
// Find all students
db.students.find(); 


// Find students with age greater than 18
db.students.find({ age: { $gt: 18 } });

