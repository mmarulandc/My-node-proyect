var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/primera_pagina");

var emailValidation =[/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, "Coloca un email valido"];
var posiblesValores = ["M","F"];
var user_schema = new Schema({
    name:String,
    username:{type:String, required:true, maxlength:[50, "el usuario no puede ser mayor de 50"]},
    password:{type:String, required:true, minlength:[3, "la contraseña debe ser mayor de 3 caracteres"]},
    age:{type: Number, min:[5,"la edad no puede ser menor de 5"], max:[100,"la edad no puede ser mayor de 100"] },
    email:{type:String, required: "El correo es obligatorio", match:emailValidation},
    date_of_birth:Date,
    sex:{type:String, enum:{values:posiblesValores,message:"opcion no valida"}}
});



var User = mongoose.model("User", user_schema);

module.exports.User = User;