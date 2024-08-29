import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.get('/users', (req, res) => {
    res.send('Hello world')
})

app.post('/user', (req, res) => {
    users.push(req.body)
})

app.listen(3300)

