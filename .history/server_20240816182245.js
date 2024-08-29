import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.post('/user', (req, res) => {
    users.status(201).push(req.body)
})

app.listen(3300)

