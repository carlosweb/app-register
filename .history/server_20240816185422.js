import express from 'express'

const app = express()
app.use(express.json())

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const users = []

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.post('/user', (req, res) => {

    prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
})

app.listen(3300)

