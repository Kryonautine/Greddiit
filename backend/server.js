require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const subgreddiitRoutes = require('./routes/subgreddiit')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

// Routes
app.use('/api/user/', userRoutes)
app.use('/api/subgreddiit/', subgreddiitRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT, () => {
			console.log('listening on port 4000')
		})
	})
	.catch((error) => {
		console.log(error)
	})