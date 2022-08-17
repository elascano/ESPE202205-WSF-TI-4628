const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://dbUser:aldahircr7@cluster0.msp6k.mongodb.net/Card", {useNewUrlParser: true}, {useUnifiedTopology: true})

//create a data schema
const CardSchema = {
    CardNum: String,
    Name: String,
    Expiration: String,
    CCV: String
}

const Card = mongoose.model("Card", CardSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/Pago de tarjeta.html")
})

app.post("/", function(req, res){
    let newCard = new Card({
        CardNum: req.body.txtCard,
        Name: req.body.txtNombre,
        Expiration: req.body.trip-start,
        CCV: req.body.txtCCV
    })
    newCard.save();
    res.redirect('/');
})

app.listen(3000, function() {
    console.log("server is running on 3000");
})