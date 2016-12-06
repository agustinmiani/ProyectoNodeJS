var express= require('express');
var bodyParser=require('body-parser');
var posts=require('./app/post');
var app=express();

//app.use(favicon());
//app.use(logger('dev'));
app.use(bodyParser());

posts.cargarPost();

app.get("/",function(req,res){

  res.end("Hola desde express!");

});

app.get("/posts", function(req,res){
  res.writeHead(200);
  res.end(posts.get());
});

app.get("/posts/new", function (req,res){
  res.writeHead(200);
  res.end(posts.getLast());
});

app.get("/posts/:id", function(req, res){
  var post=posts.getById(req.params.id);
  if (post==undefined){
    res.writeHead(404);
        res.end("No existe");
  }
  res.writeHead(200);
  res.end(post);
});

app.put("/posts/:id", function(req, res){

});

app.post("/posts/:id",function(req, res){
  posts.insert(req.body);
  res.writeHead(200);
  res.end(posts.get());
  //res.send("Ok");
});

app.delete("/posts/:id", function(req, res){
  posts.deletePost(req.params.id);
  res.writeHead(200);
  res.end(posts.get());
});

app.listen(3000);
