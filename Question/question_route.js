const express = require('express')
const route = express()

route.get('/question/home', (req, res) => {
    res.status(200).send("test")
})

route.get('/question/xplusy', async (req, res) => {
    const XPlusY = require('./Xplusy/xplusy_1')
    const xplusy = new XPlusY()
    xplusy.checkAnswer('test.c', 'bear')
    .then(result => {
        console.log(result)
        res.status(200).send(result)
    })
    .catch(err => {
        console.log(err)
        res.status(404).send('occor errors')
    })
})

const PORT = '8089'
const ADD = '0.0.0.0'
route.listen('8089', ADD, () => {
    console.log(`The Question server is running the ${ADD}:${PORT}`)
})
