var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var tipoSchema = mongoose.Schema({
	descricao: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Tipo', tipoSchema);