const express = require('express');
const app = express();

 app.get('/', (require,response) => { 
     return response.json({evento: 'SemanaOmnistack',
    aluno: 'Lele'}) 
 }); //criando a rota principal

app.listen(3333);
