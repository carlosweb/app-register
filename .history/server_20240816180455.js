import express from 'express'

const app = express()

const users = []

app.get('/users', (req, res) => {
    res.send('Hello world')
})

app.post('/user', (req, res) => {

})

app.listen(3300)

