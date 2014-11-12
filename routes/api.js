var express = require('express');
var router = express.Router();
var api = require('../controllers/api');

/* GET home page. */
var result = [{
	id: 1,
	nome: 'Reginaldo'
}];	


router.route('/').get(function(req, res){
	res.send(result);
});

router.get('/user', api.user);

router.route('/auth').get(function(req, res){

});

router.route('/open').get(function(req, res){
	res.send(200, true);
});
router.route('/pedido').get(function(req, res){
	res.send(200, 'Vodkas');
});

router.get('/bebidas', api.listBebidas);
router.get('/bebidas/list/:id', api.listBebidasByTipo);


module.exports = router;

