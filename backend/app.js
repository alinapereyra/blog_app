const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const { Post } = require('./models/posts');


const MongoClient = require('mongodb');
const app = express();

let db;
const port = 3000;
app.use(express.json());
const uri = "mongodb+srv://Demo:Alina@cluster0.5ej8t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 

app.use(bodyParser.json());
app.use(cors());

// 10-13 allow us to connect to database
MongoClient.connect(uri, {useUnifiedTopology:true}, function(error,client){
    console.log("Connected to MongoDB successfully");
    db = client.db("mongodb-lecture");
})

app.listen(port, function(req,res){
    console.log("listening at port: " + port);
})
app.get('/addBlog', function(req,res){
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/', function(req, res) {
    res.send("Hi");
})

// we are referencing db and looking for a collection called blogs
// in this folder, we are inserting an object
// object has title and content
app.post('/addBlog', function(req,res){
    db.collection("posts").insertOne({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    // if there is an error, it will throw you an error
    },function(error,result){
        if(error) throw error;
    // if there is no error, you will be sent a message
        console.log("yay!");
        res.send("blog added successfully");
    })
});

app.get('/getBlogs', (req, res) => {
    db.collection("posts").find().toArray(function(err, result) {
        console.log(result);
        res.send(result);
      })
});

app.get('/getBlogs', function(req,res){
    db.collection('posts').find({}).toArray(function(error,documents){
        if (error) throw error;
        for(let counter = 0; counter < documents.length;counter++){
            res.write("Title: " + documents[counter].title + " Content: " + documents[counter].content + '\n');
        }
        res.end();
    })
});

app.post('/customBlog', function(req,res){
    db.collection('posts').insertOne({
        title: req.body.title,
        content: req.body.content
    }, function(error, result){
        if(error) throw error;
        res.send('Blog added successfully');
    })
})