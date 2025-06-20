const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    // const result =await db.insertOne({
    //     name:'Vishal',
    //     age: 22, 
    //     course: 'MERN'
    // });

    const result = await db.insertMany(
        [
           {name:'max 1', age: 22, course: 'MERN'},
           {name:'max 2', age: 23, course: 'MERN'},
           {name:'max 3', age: 24, course: 'MERN'},
           {name:'max 4', age: 25, course: 'MERN'},
           {name:'max 5', age: 26, course: 'MERN'} 
        ]
    );

    if(result.acknowledged){
        console.log('Data Inserted Successfully.');
    }
    // console.log(result);
}

insert();