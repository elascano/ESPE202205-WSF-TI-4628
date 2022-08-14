const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require('ejs');

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://ldgomez:21111999lg@cluster0.68u2kul.mongodb.net/shop?retryWrites=true&w=majority");

const catalogSchema = {
    id: String,
    label: String,
    link: String,
    icon: String
};

const Catalog = mongoose.model('catalogos', catalogSchema);

app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/'));

app.get("/", (req, res) => {
    Catalog.find({}, function(err, catalogs) {
        res.render('../index_home.html', {
            catalogList: catalogs
        })
    })
});

app.get("/CatalogoNinos", (req, res) => {
    Catalog.find({}, function(err, catalogs) {
        res.render('../CatalogoNinos.html', {
            catalogList: catalogs
        })
    })
});

app.get("/CatalogoNinas", (req, res) => {
    Catalog.find({}, function(err, catalogs) {
        res.render('../CatalogoNinas.html', {
            catalogList: catalogs
        })
    })
});
app.get("/CatalogoHombres", (req, res) => {
    Catalog.find({}, function(err, catalogs) {
        res.render('../CatalogoHombres.html', {
            catalogList: catalogs
        })
    })
});
app.get("/CatalogoMujeres", (req, res) => {
    Catalog.find({}, function(err, catalogs) {
        res.render('../CatalogoMujeres.html', {
            catalogList: catalogs
        })
    })
});

app.listen(4000, function() {
    console.log('Server is running');
});