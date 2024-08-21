const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config({path:'variaveis.env'});
const db = require('./db');

const app = express();
const routes = require('./routes');

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use(routes); 

// Inicia o servidor
app.listen(process.env.PORT, () => {
  console.log(`servidor rodando em: http://localhost:` + process.env.PORT);
});