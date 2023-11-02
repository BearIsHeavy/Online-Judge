const express = require('express')
const route = express()

route.use(express.json())

route.get('/', (req, res) => {
    res.status(200).send('test')
})

route.get('/question/home', (req, res) => {
    res.status(200).send("test")
})

route.get('/question/helloword', (req, res) => {
    const HelloWord = require('./HelloWord/HelloWord')
    // The data, _path avaiable will be fetch request body
    const data = "#include <stdio.h> \n int main() \n { printf(\"Hello World\"); return 0; }"
    const _path = "/HelloWord/test.c"
    const helloword = new HelloWord(_path, 1, data)
    helloword.checkout_c()
    res.status(200).send('hello word')
})




const PORT = 8089
const ADD = '0.0.0.0'
route.listen('8089', ADD, () => {
    console.log(`The Question server is running the ${ADD}:${PORT}`)
})
