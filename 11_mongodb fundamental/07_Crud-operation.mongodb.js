// 1. Create (Insert Data)
db.students.insertOne({
    name: "Sachin",
    age: 20,
    course: "BCA",
    city: "Gurgaon"
});


// 2. Read (Find Data)
// Find all students
db.students.find(); 
