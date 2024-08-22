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
  
    db.query('INSERT INTO clientes (nome, telefone, idade, email) VALUES (?, ?, ?, ?)', 
      [nome, telefone, idade, email], (err, results) => {
    });
  });

  router.delete('/api/cadastro/:id', (req, res) => {
    const id = parseInt(req.params.id);

    db.query('DELETE FROM clientes WHERE id = ?',[id], (err, results) => {
      // if (err) throw err;
      // res.json(results);
    });
  });

module.exports = router;

// excluir: (id) => {
//   return new Promise((aceito, rejeitado) => {

//       db.query('DELETE FROM cadastro2 WHERE id = ?', [id], (error, results) => {
//           if (error) { rejeitado(error); return; }
//           aceito(results);
//       });
//   });
// },

// excluir: async (req, res) => {
//   let lista = { error: '', result: {} };

//   CadastroService.excluir(req.params.id);

//   res.json(lista);
// }