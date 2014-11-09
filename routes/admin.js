var express = require('express');
var router = express.Router();
var admin = require('../controllers/admin');
/* GET home page. */
		
router.get('/', admin.index);
router.get('/pedido', admin.pedido);
router.get('/bebida', admin.bebida);
router.get('/contas', admin.contas);
router.route('/login')
	  .get(admin.login)
	  .post(function(req, res){
	  	res.send(200, {redirect:'/admin'});
	  }); 


module.exports = router;
