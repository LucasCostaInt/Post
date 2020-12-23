const express = require("express");
const app = express();
const handlebars =require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Config
    //template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

// Rotas

app.get('/cad', function(req,res){
    res.render('formulario')
})

app.post('/add', function(req,res){

    try {Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })}
    catch(error){
        res.send("Houve um erro: "+error)
    }   
})

app.listen(8080,function(){
    console.log('Servidor rodando na url http://localhost:8080/')
})