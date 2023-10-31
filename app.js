const express = require('express')
const Player = require('./player')
const Login = require('./src/Login')
const { log } = require('console')

const app = express()
app.use(express.json())

// create ten player
const player = []
player.push(new Player('wzh', 1, 'i love bear'))
player.push(new Player('xqq', 2, 'i love wzh'))
player.push(new Player('yc', 3, 'i love wzh'))


app.get('/welcome', (req, res) => {
    res.status(200).send('Vote successfully')
})

app.get('/studentVote', (req, res) => {
    const body = req.body
    const number = body.number

    player[number].addStudentScoure()
    res.status(200).send( JSON.stringify(player[number].getScore()) )
})

app.get('/teacherVote', (req, res) => {
    const body = req.body
    const number = body.number

    player[number].addTeacherScore()
    res.status(200).send( JSON.stringify(player[number].getScore()) )
})

app.get('/voteRankList', (_, res) => {
    const result = {
        player_0: player[0].printPlayer(),
        player_1: player[1].printPlayer()
    }
    res.status(200).send(JSON.stringify(result))
})

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



const PROT = '8088'
const ADD = '0.0.0.0'
app.listen(PROT, ADD, () => {
    console.log(`The server is running the ${ADD}:${PROT}`)
})