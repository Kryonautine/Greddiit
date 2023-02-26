const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reportSchema = new Schema({
	reportedBy: {
		type: String,
		required: true
	},
	reportedUser: {
		type: String,
		required: true
	},
	concern: {
		type: String,
		required: true
	},
	associatedPost: {
		type: String,
		required: true
	},
}, {timestamps: true});

module.exports = mongoose.model('Report', reportSchema);