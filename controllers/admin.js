exports.index = function(req, res){
	req.session.teste = 'Teste';
	res.render('admin/index');
}
exports.login = function(req, res){
	res.render('admin/login');
}

exports.login_verify = function(res, req){
	res.send(200, {redirect:'/admin'});
}
exports.pedido = function(req, res){
	res.render('admin/pedido');
}

exports.bebida = function(req, res){
	res.render('admin/bebida');
}

exports.contas = function(req, res){
	res.render('admin/contas');
}

