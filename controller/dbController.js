const { MongoClient } = require("mongodb");
const mongoURL = "mongodb+srv://sureshkanna:test12345@cluster0.9sd51gd.mongodb.net/?retryWrites=true&w=majority"

let client = new MongoClient(mongoURL);

async function connectDB() {
    await client.connect();
}

let db = client.db("baskinrobbins")

async function getData(collectionName, query) {
    let output;
    try{
        let recievedData = db.collection(collectionName).find(query)
        output = recievedData.toArray()
    }
    catch(err) {
        console.log(err)
        output = {"response": "error in recieving dara"}
    }
    return output
}

async function postData(collectionName, data) {
    let output;
    try{
       output = db.collection(collectionName).insertOne(data)
    }
    catch(err){
        console.log(err)
        output = {"response": "error in inserting data"}
    }
    return output
}

async function postMultipleData(collectionName, data) {
    let output;
    try {
        output = db.collection(collectionName).insertMany(data)
    }
    catch(err) {
        console.log(err)
        output = {"response": "error in inserting data"}
    }
    return output
}

async function updateData(collectionName, condition, data) {
    let output
    try{
        output = db.collection(collectionName).updateOne(condition, data)
    }
    catch(err){
        console.log(err)
        output = {"response": "error in inserting data"}
    }
    return output
}

async function deleteData(collectionName, condition) {
    let output;
    try{
        output = db.collection(collectionName).deleteOne(condition)
    }
    catch(err){
        console.log(err)
        output = {"response": "error in inserting data"}
    }
    return output
}

module.exports={
    connectDB,
    getData,
    postData,
    postMultipleData,
    updateData,
    deleteData
}