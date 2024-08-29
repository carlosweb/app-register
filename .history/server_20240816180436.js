import express from 'express'

const app = express()

const users = []

app.get('/users', (req, res) => {
    res.send('Hello world')
})

app.post('/users', (req, res) => {
    res.send('Hello world')
})

app.listen(3300)

