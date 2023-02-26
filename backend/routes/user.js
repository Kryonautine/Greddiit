const express = require('express')
const User = require('../models/userModel')
const mongoose = require('mongoose')

const router = express.Router()

// GET all users
router.get('/', async (req, res) => {
	const users = await User.find({})

	try {
		res.status(200).json(users)
	}
	catch (error) {
		res.status(400).json({error: error.message})
	}
})

// GET a single user
router.get('/:id', async (req, res) => {
	const {id} = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: 'No such user'})
	}

	const user = await User.findById(id)
	if (!user) {
		res.status(404).json({error: 'No such user'})
	}
	else {
		res.status(200).json(user)
	}
})

// POST a user
router.post('/', async (req, res) => {
	const {firstname, lastname, name, email, password, age, phone} = req.body;

	try {
		const user = await User.create({firstname, lastname, name, email, password, age, phone})
		res.status(200).json(user)
	}
	catch (error) {
		res.status(400).json({error: error.message})
	}
})

// DELETE a user
router.delete('/:id', async (req, res) => {
	const {id} = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: 'No such user'})
	}

	const user = await User.findOneAndDelete({_id: id})

	if (!user) {
		res.status(404).json({error: 'No such user'})
	}
	else {
		res.status(200).json(user)
	}
})

// UPDATE a user
router.patch('/:id', async (req, res) => {
	const {id} = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: 'No such user'})
	}

	const user = await User.findOneAndUpdate({_id: id}, {
		...req.body
	})

	if (!user) {
		res.status(404).json({error: 'No such user'})
	}
	else {
		res.status(200).json(user)
	}
})

module.exports = router