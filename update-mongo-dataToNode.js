const dbConnect = require('./mongodb');

const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: 'max 1'},{
            $set:{name: 'max 1 updated'}
        }
    )
    console.warn(result);
}

updateData();