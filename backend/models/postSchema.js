const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
	text: {
		type: String,
		required: true
	},
	postedBy: {
		type: String,
		required: true
	},
	postedIn: {
		type: String,
		required: true
	},
	upVotes: {
		type: Number,
		required: true
	},
	downVotes: {
		type: Number,
		required: true
	},
}, {timestamps: true});

module.exports = mongoose.model('Post', postSchema);