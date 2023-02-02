let express = require("express")
let router = express()
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");


router.get("/", function(req,res){
    res.render("index")
})

router.get("/artista", function(req,res){
    res.render("artista")
})

module.exports = router