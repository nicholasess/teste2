var express = require('express');
var router = express.Router();

/* GET home page. */
var result = [{
	id: 1,
	nome: 'Reginaldo'
}];	
router.get('/', function(req, res){
	res.send(result);
});


module.exports = router;
