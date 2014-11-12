var User = require('../models/user'),
	Drink = require('../models/bebida');
exports.user = function(req, res){
	User.find().exec(function(err, result){
		res.send(result);
	});
}
/*
	Error

	100 - Usuário Existe
	101 - Usuário não existe

*/

exports.user_save = function(req, res){
	var data = {
		email: req.body.email
	};

	User.findOne(data).exec(function(err, result){
		if(err) throw err;

		if(result){
			res.send(200, {
				error: 100
			});
		}else{
			res.send(200, {
				error: 101
			});
		}	
	});
}

exports.listBebidas = function(req, res){
	Drink.find().exec(function(err, result){
		res.send(result);
	});
}

exports.listBebidasByTipo = function(req, res){
	var idTipo = req.params.id;
		Drink.find({tipo:idTipo}).exec(function(err, result){
			res.send({bebidas: result});
		});		
	
}