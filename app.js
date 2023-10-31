const express = require('express')
const Player = require('./player')

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



const PROT = '8088'
const ADD = '0.0.0.0'
app.listen(PROT, ADD, () => {
    console.log(`The server is running the ${ADD}:${PROT}`)
})