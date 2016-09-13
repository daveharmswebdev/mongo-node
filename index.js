'use strict'

const { MongoClient } = require('mongodb')

const MONGODB_URL = 'mongodb://localhost:27017/test'

MongoClient
	.connect(MONGODB_URL)
	.then(db => {
		db.collection('restaurants')
			.find()
			// .toArray()
			.forEach(restaurant => {
				console.log(restaurant)
			}, () => db.close())
	})
	.catch(console.error)

