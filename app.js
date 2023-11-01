const express = require('express')
const Login = require('./src/Login')

const app = express()
app.use(express.json())

require('./Question/question_route')
require('./VoteRankingList/vote_route')


const login = new Login()
app.post('/register', (req, res) => {
    const body = req.body

    const email = body.email
    const name = body.name
    const password = body.password
    const login_laster_time = body.login_laster_time

    login.register(email, name, password, login_laster_time)
    res.status(200).send('register successfully !! ')
})

app.post('/login', async (req, res) => {
    const body = req.body
    const email = body.email
    const password = body.password

    let flag = false
    await login.toLogin(email, password)
    .then(result => {
        flag = result
    })
    .catch(err => {
        console.log("login.toLogin occury" + err)
    }) 
    // console.log(flag)
    if (flag == true) {
        console.log("url " + req.ip + " successfully")
        res.status(200).send('successfully')
    } else {
        console.log("url " + req.ip + " failly")
        res.status(401).send("fail")
    }
})



const PORT = '8088'
const ADD = '0.0.0.0'
app.listen(PORT, ADD, () => {
    console.log(`The Home server is running the ${ADD}:${PORT}`)
})