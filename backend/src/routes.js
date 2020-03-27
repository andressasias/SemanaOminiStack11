const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfilleController = require('./controllers/ProfilleController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profille', ProfilleController.index);

//exportanto a variável pro index poder importar e usar
module.exports = routes;

/*Rota: caminho, ex /users = Recurso é o que vem depois da barra
app.get: signinifica que to acessando pelo método http GET

MÉTODOS HTTP

Get: buscar/listas informação do backend
POST: Criar uma informação no backend
PUT: Alterar informação do backend
DELETE: Deletar uma informação no backend
*/

/*
Tipos de parâmetros

Query params: Parâmetros nomeados enviados na rota após o simbolo ? (Filtros, paginação)
Route params: Parâmetros utilizados para identificar recursos (users/:id)
Request body: Corpo da requisição, utilizado para criar ou alterar recursos

*/

/**Bancos de dados
 * SQL: Mysql, SQLite, PostgreSQL, Oracle
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Comunicação entre banco
  * Driver: SELECT * FROM users
  * Query builder: table('users').select('*').where(); (direto sql)
  * 
  * Vamos usar o query builder Knex
  */
