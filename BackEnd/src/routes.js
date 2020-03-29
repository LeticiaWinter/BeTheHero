
const express = require('express'); //importando a dependencia

const routes = express.Router(); //criando as routas

//app.use(express.json()); //avisando que vamos usar json como objetos

//criando a rota "users"
 routes.post('/users', (request,response) => { 
     const body = request.body;

     console.log(body);

     return response.json({evento: 'SemanaOmnistack',
    aluno: 'Lele'}) 
 });

module.exports = routes;