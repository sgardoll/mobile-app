//import all of the required node modules
const express = require('express'); 
const bodyParser= require('body-parser'); 
var cors = require('cors');
const { uuid } = require('uuidv4');
const storage = require('node-persist'); 
//create an async IIFE
(async() => {

    //define options for node persist
    const options = { dir: 'service/storage',stringify: JSON.stringify, parse: JSON.parse }; 
    await storage.init(options); 
    //initialize new express app
    const app = express(); 
    //register body parser
    app.use(bodyParser.json()); 
    app.use(cors()); 

    //register the get users handler
    app.get('/users',async(req,res)=>{
        let users = await storage.values();
        res.json(users); 
    }); 
    //register the get single user by id handler
    app.get('/users/:id',async(req,res)=>{
        let id = req.params.id; 
        let user = await storage.getItem(id); 
        res.json(user); 
    });
    //register the update single user by id handler
    app.put('/users/:id',async(req,res)=>{
        let id = req.params.id; 
        let user = await storage.getItem(id); 
        user.firstName = req.body.firstName; 
        user.lastName = req.body.lastName; 
        user.email = req.body.email; 
        user.phone = req.body.phone; 
        user.age = req.body.age; 
        user.address= req.body.address; 
        user.updated = new Date(); 
        await storage.updateItem(id,user); 
        res.json(user); 
    });
    //register the delete single user by id handler
    app.delete('/users/:id',async(req,res)=>{
        let id = req.params.id; 
        await storage.removeItem(id); 
        res.status(204).send();      
    });
    //register the post user handler
    app.post('/users',async(req,res)=>{
        let user = req.body; 
        user.id = uuid(); 
        user.updated = new Date(); 
        await storage.setItem(user.id,user); 
        res.statusCode = 201; 
        res.json(user); 
    }); 
    //start web server
    app.listen(3000,()=>console.log('started')); 
})(); 