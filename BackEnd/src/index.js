/// fizemos npm install nodemon - D e mudamos dentro do packge.json o test pra start: "nodemon index.js", depois demos npm start pro backend continuar live 

const express = require('express'); //importando a dependencia
const routes = require('./routes'); //linkando com o routes.js

const app = express(); //criando uma aplicação usando o express
app.use(express.json()); //avisando que vamos usar json como objetos
app.use(routes);

 
app.listen(3333); //pra acessar, localhost:3333
