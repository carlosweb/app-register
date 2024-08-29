import express from 'express'



const app = express()

app.get('/users', (req, res) => {
    app.send('Hello world')
})

app.listen('3300')

