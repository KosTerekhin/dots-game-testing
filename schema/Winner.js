const mongoose = require('mongoose');

const WinnerSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	time: {
		type: Number,
		required: true
	},
	date: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('winner', WinnerSchema);
