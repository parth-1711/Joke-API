const express=require('express');
const bodyParser=require('body-parser');
const mongoose = require("mongoose");
const jokeRoutes=require('./Routes/jokes');

const app=express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
const mongodbURI="mongodb+srv://parthirache8:o4dRloPnJCp63b9k@cluster0.vjuhhng.mongodb.net/Joke_DB?retryWrites=true&w=majority";
mongoose.connect(mongodbURI, { useNewUrlParser: true });


// app.use(bodyParser.json());

app.use('/',jokeRoutes);


app.listen(3000,()=>{
    console.log("server is up and running !");
});