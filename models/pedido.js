var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	senha: {
		type: Number
	},
	nome: {
		type: String
	},
	celular:{
		type: String
	},
	idade: {
		type: Number
	},
	imagemUrl: {
		type: String
	}
});

module.exports = mongoose.model('pedido', userSchema);