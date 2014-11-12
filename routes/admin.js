var express = require('express');
var router = express.Router();
var admin = require('../controllers/admin');
/* GET home page. */
		
router.get('/', admin.index);
router.get('/pedido', admin.pedido);
router.get('/bebida/cadastrar', admin.bebida_cadastrar);
router.post('/bebida/cadastrar', admin.bebida_save);
router.get('/tipo/index', admin.tipo);
router.get('/tipo/:id', admin.tipo_perfil);
router.post('/tipo/cadastrar', admin.tipo_salvar);
router.get('/contas', admin.contas);
router.route('/login')
	  .get(admin.login)
	  .post(function(req, res){
	  	res.send(200, {redirect:'/admin'});
	  }); 


module.exports = router;
