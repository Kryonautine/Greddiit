const express = require('express')
const Subgreddiit = require('../models/subgreddiitModel')
const mongoose = require('mongoose')

const router = express.Router()

// GET all subgreddiits
router.get('/', async (req, res) => {
	const subgreddiits = await Subgreddiit.find({})

	try {
		res.status(200).json(subgreddiits)
	}
	catch (error) {
		res.status(400).json({error: error.message})
	}
})

// GET a single subgreddiit
router.get('/:id', async (req, res) => {
	const {id} = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: 'No such subgreddiit'})
	}

	const subgreddiit = await Subgreddiit.findById(id)
	if (!subgreddiit) {
		res.status(404).json({error: 'No such subgreddiit'})
	}
	else {
		res.status(200).json(subgreddiit)
	}
})

// POST a subgreddiit
router.post('/', async (req, res) => {
	const {name, description, tags, banned_keywords} = req.body;

	try {
		const subgreddiit = await Subgreddiit.create({name, description, tags, banned_keywords})
		res.status(200).json(subgreddiit)
	}
	catch (error) {
		res.status(400).json({error: error.message})
	}
})

// DELETE a subgreddiit
router.delete('/:id', async (req, res) => {
	const {id} = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: 'No such subgreddiit'})
	}

	const subgreddiit = await Subgreddiit.findOneAndDelete({_id: id})

	if (!subgreddiit) {
		res.status(404).json({error: 'No such subgreddiit'})
	}
	else {
		res.status(200).json(subgreddiit)
	}
})

// UPDATE a subgreddiit
router.patch('/:id', async (req, res) => {
	const {id} = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: 'No such subgreddiit'})
	}

	const subgreddiit = await Subgreddiit.findOneAndUpdate({_id: id}, {
		...req.body
	})

	if (!subgreddiit) {
		res.status(404).json({error: 'No such subgreddiit'})
	}
	else {
		res.status(200).json(subgreddiit)
	}
})

module.exports = router