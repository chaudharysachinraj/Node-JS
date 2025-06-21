const dbConnect = require('./mongodb');

const deleteData = async ()=>{
    let data =await dbConnect();
    let result =await data.deleteOne({name: 'max 4'});
    console.warn(result);

    if(result.acknowledged){
        console.log('Data Deleted Successfully.');
    }
}

deleteData();