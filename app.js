const express = require("express");
const app = express();
const path = require('path');
const handlebars = require("express-handlebars").engine;

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set('views', './views');

// Define a variável title para ser usada nas rotas
const title = 'Cadastro';

app.get("/", 
function (req, res) {
  res.render('cadastro',{title} ); 
    }
  );

  app.get('/list', (req, res) =>{
    const title = "Lista"
    const cad = [
      { nome: 'Nina', endereco: 'Rua dos Gatos, 777', bairro: 'Gatolindo', cep: '7777-777', cidade: 'Gatolândia', estado: 'Gatopólis' },
      { nome: 'Pipoca', endereco: 'Rua dos Gatos, 7', bairro: 'Gatolindo', cep: '11111-111', cidade: 'Gatolândia', estado: 'Gatopólis' },
      { nome: 'Pandora', endereco: 'Rua dos Gatos, 7', bairro: 'Gatolindo', cep: '22222-222', cidade: 'Gatolândia', estado: 'Gatopólis' }
    ]
    res.render('list', {cad, title} )
  })

app.listen(8081, function () {
  console.log("Servidor Ativo!");
});