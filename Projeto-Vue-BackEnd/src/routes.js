const express = require('express');
const router = express();
const db = require('./db');



// Rotas da API
router.get('/api/cadastros', (req, res) => {
    db.query('SELECT * FROM clientes', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  router.post('/api/cadastros', (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const telefone = req.body.telefone;
    const email = req.body.email;
  
    db.query('INSERT INTO clientes (nome, telefone, idade, email) VALUES (?, ?, ?, ?)', [nome, telefone, idade, email], (err, results) => {
      // if (err) throw err;
      // res.json({ id: results.insertId, ...id,});
    });
  });

module.exports = router;