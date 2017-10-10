const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
	name: String,
	alive: Boolean,
	image: String
});

module.exports = mongoose.model('Author', authorSchema);
