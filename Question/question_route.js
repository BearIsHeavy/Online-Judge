const express = require('express')
const route = express()

route.get('/question/home', (req, res) => {
    res.status(200).send("test")
})

route.get('/question/xplusy')

const PORT = '8089'
const ADD = '0.0.0.0'
route.listen('8089', ADD, () => {
    console.log(`The Question server is running the ${ADD}:${PORT}`)
})
