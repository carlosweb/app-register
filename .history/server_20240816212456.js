import express from 'express'

const app = express()
app.use(express.json())

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



//post users
app.post('/user', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(200).json(req.body)
})


//update users
app.put('/user/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(200).json(rew.body)
})


//delete users
app.delete('/user/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'User deleted' })
})

//get users
app.get('/users', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})




app.listen(3300)

