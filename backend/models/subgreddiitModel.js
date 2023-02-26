
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const subgreddiitSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false
	},
	tags: {
		type: String,
		required: false
	},
	banned_keywords: {
		type: String,
		required: false
	},
}, {timestamps: true});

module.exports = mongoose.model('Subgreddiit', subgreddiitSchema);