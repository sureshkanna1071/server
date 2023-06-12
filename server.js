const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors");
const Mongo = require("mongodb")
let {connectDB, getData, postData, updateData, deleteData, postMultipleData} = require("./controller/dbController")

app.use(bodyParser.json(), bodyParser.urlencoded({extended: 'true'}));
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Express server</h1>")
})

// get the list of shops

app.get("/shops", async(req, res) => {
    let collectionName = "shops"
    let query
    let output = await getData(collectionName, query);
    res.send(output)
})

// get the list of ranges

app.get("/ranges", async(req, res) => {
    let collectionName = "ranges"
    let query
    let output = await getData(collectionName, query);
    res.send(output)
})

// get list of blogs

app.get("/blogs", async(req, res) => {
    let collectionName = "blogs"
    let query
    let output = await getData(collectionName, query);
    res.send(output)
})

// get all menu items

app.get("/menu", async(req, res) => {
    let collectionName = "menu"
    let query
    let output = await getData(collectionName, query);
    res.send(output)
})

// get all time fav items in menu

app.get("/menu/fav", async(req, res) => {
    let collectionName = "menu"
    let query = {isAllTimeFav: true}
    let output = await getData(collectionName, query);
    res.send(output)
})

// get all new items in menu

app.get("/menu/new", async(req, res) => {
    let collectionName = "menu"
    let query = {isNew: true}
    let output = await getData(collectionName, query);
    res.send(output)
})

// get all veg items in menu

app.get("/menu/veg", async(req, res) => {
    let collectionName = "menu"
    let query = {isVeg: true}
    let output = await getData(collectionName, query);
    res.send(output)
})

// menu with respect to range id

app.get("/menu/:rangeId", async(req, res) => {
    let collectionName = "menu"
    let query = {range_id: Number(req.params.rangeId)}
    let output = await getData(collectionName, query);
    res.send(output)
})

// subscribe to news letter

app.post("/newsletter", async(req, res) => {
    let data = {email: req.query.email, status: req.query.status}
    let collectionName = "newsletter"
    let output = await postData(collectionName, data)
    res.send({"message": `${req.query.email} subscribed to newsletter`, "response": output});
})

// unsubscribe to news letter

app.put("/newsletter", async(req, res) => {
    let condition = {email: req.query.email}
    let data = {$set: {status: req.query.status}}
    let collectionName = "newsletter"
    let output = await updateData(collectionName, condition, data)
    res.send({"message": `${req.query.email} Unsubscribed to newsletter`, "response": output}) 
})

// get details of items in the cart

app.post("/cart", async(req, res) => {
    let collectionName = "menu"
    let query = {product_id: {$in: req.body.id}}
    let output = await getData(collectionName, query);
    res.send(output)
})

// add items to the cart

app.put("/cart", async (req, res) => {
     let collectionName = "cart"
     let query = {email: req.body.email}
     let previousData = await getData(collectionName, query);
     let previousItems = previousData[0].cart_items
     previousItems.push(req.body.id)
     let data = {$set: {cart_items: previousItems}}
     let output = await updateData(collectionName, query, data)
     res.send(output)
})

// update the items in the cart

app.put("/cart", async (req, res) => {
    let collectionName = "cart"
    let condition = {email: req.body.email}
    let id = req.body.id
    let data = {$set: {cart_items: req.body.id}}
    let output;
    if(Array.isArray(id)) {
        output = updateData(collectionName, condition, data)
    }
        output = {"message": "need data in an array", "response": output}
    res.send(output);
})

// get the order details

app.get("/order", async(req, res) => {
    let collectionName = "order"
    let query = {}
    let output = await getData(collectionName, query);
    res.send(output)
})

// place the order

app.post("/order", async(req, res) => {
    let collectionName = "order"
    let data = req.body
    let output = await postData(collectionName, data)
    res.send({"message": "Order placed successfully", "response": output});
})

// update the order

app.put("/order", async(req, res) => {
    let data = {$set: {[req.body.name]: req.body.value}}
    let condition = {email: req.body.email}
    let collectionName = "order"
    let output = await updateData(collectionName, condition, data)
    res.send({"message": "Order Updated successfully", "response": output});
})

app.listen("3699", () => {
    connectDB();
    console.log("server started")
})