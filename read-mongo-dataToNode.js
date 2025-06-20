const dbConnect = require('./mongodb');

// console.warn(dbConnect());


// dbConnect().then((resp) => {
// console.warn(resp.findOne({name:"Sachin"}).then((data) =>{
//     console.warn(data);
// }));
// })

const main = async () =>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();