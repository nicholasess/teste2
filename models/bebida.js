var mongoose = require('mongoose'),
	ObjectId = mongoose.Schema.ObjectId;
	
var bebidasSchema = mongoose.Schema({
	descricao: {
		type: String
	},
	tipo: { 
		type: ObjectId,
		ref: 'Tipo' 
	},
	precoCusto: {
		type: String
	},
	precoVenda:{
		type: String
	},
	quantidade: {
		type: Number
	}
});

module.exports = mongoose.model('Bebida', bebidasSchema);
