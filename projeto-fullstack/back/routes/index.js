var express = require('express');
var router = express.Router();
var listaAlunos = []

/* GET home page. */
router.get('/:id', function(req, res) {
  console.log('pasei')
  valor = req.params.id
  res.send( { params: valor });
});

/* GET home page. */
router.get('/', function(req, res) {
  res.send( { alunos: listaAlunos });
});

/* Post home page. */
router.post('/', function(req, res) {
  console.log('veio')
  corpo = req.body
  listaAlunos.push(corpo)
  res.send( { status: "aluno salvo" });
});

/* Post home page. */
router.delete('/', function(req, res) {
  listaAlunos.pop()
  res.send( { status: "aluno removido" });
});

module.exports = router;
