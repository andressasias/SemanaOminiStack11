//importanto o módulo do express e colocando na variável express
const express = require('express');
const cors = require('cors');
//importanto rotas
const routes = require('./routes');

//estanciando a aplicação
const app = express();

app.use(cors());

//avisando que estamos usando json para o corpo das requisições
app.use(express.json());
app.use(routes);


//aplicação ouvindo a porta 3333
app.listen(3333);

