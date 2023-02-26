const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
	first_name: {
		type: String,
		required: false
	},
	last_name: {
		type: String,
		required: false
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: false
	},
	contact_no: {
		type: Number,
		required: false
	},
	password: {
		type: String,
		required: true
	},
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);