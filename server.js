import express from 'express'

const app = express()

app.get('/', (req, res) => {
	res.send('Ready to receive requests')
})

app.listen(3000, () => {
	console.log('App listening on Port 3000')
})