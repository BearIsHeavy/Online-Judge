const express = require('express')
const route = express()

route.get('/question/home', (req, res) => {
    res.status(200).send("test")
})

route.get('/question/helloword', async (req, res) => {
    const XPlusY = require('./HelloWord/HelloWord')
    const xplusy = new XPlusY()
    
})

const PORT = '8089'
const ADD = '0.0.0.0'
route.listen('8089', ADD, () => {
    console.log(`The Question server is running the ${ADD}:${PORT}`)
})
