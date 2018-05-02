var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var User = require("./models/user").User;

app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
   res.render("index");
});

app.get("/login", function(req,res){
    res.render("login");
});


app.get("/signup", function(req,res){
    User.find(function(err,doc){
    console.log(doc);
    });
    console.log(req.body.password)
    res.render("signup");
});

app.post("/users", function(req,res){
    var user = new User({email:req.body.email, password: req.body.pass, username: req.body.username});
    user.save(function(err){
        if(err){
            console.log(String(err));
        }
        res.send("Guardamos tus datos");
    });
});

app.post("/sessions",function(req,res){
    User.findOne({email:req.body.email, password:req.body.pass},function(err,doc){
        if(err){ 
            console.log(String(err));
        }
        console.log(doc);
        res.send("hola mundo");
    
    });
});
app.listen(8080);

