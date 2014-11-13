var Drink = require('../models/bebida');
	Type = require('../models/tipo');

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

exports.tipo = function(req, res){
	Type.find().exec(function(err, result){
		res.render('admin/tipo/index', {
			tipos: result
		});
	});	
}

exports.tipo_perfil = function(req, res, next){
	req.session.tipo = req.params.id;
	Type.findOne({_id: req.params.id}).exec(function(err, result){
		Drink.find({tipo:result._id}).populate('tipo').exec(function(err, result2){
			res.render('admin/tipo/profile', {profile: result, drinks: result2});		
		});		
	});
}

exports.tipo_salvar = function(req, res){
	var data = {
		descricao: req.body.descricao
	}
	var novo_tipo = new Type(data);
	novo_tipo.save(function(err, result){
		res.redirect('/admin/tipo/index');
	});
}

exports.tipo_deletar = function(req, res){

}

exports.bebida_cadastrar = function(req, res){
	var tipo = req.session.tipo;
	res.render('admin/bebida/cadastrar', {tipo: tipo});		
}

exports.bebida_save = function(req, res, next){
	var data = {
		descricao: req.body.descricao,
		tipo: req.body.tipo,
		precoCusto: req.body.custo || '',
		precoVenda: req.body.venda || '',
		quantidade: req.body.qtd || 0
	}
	var tipo = new Drink(data);
	tipo.save(function(err, result){
		if(err) console.error(err);
		res.redirect('/admin/tipo/'+req.body.tipo);
	});	
}

exports.contas = function(req, res){
	res.render('admin/contas');
}

