const express = require('express')
const Player = require('./player')
const route = express()

route.get('/vote/home', (req, res) => {
    res.status(200).send("Vote Home")
})

// create ten player
const player = []
player.push(new Player('wzh', 1, 'i love bear'))
player.push(new Player('xqq', 2, 'i love wzh'))
player.push(new Player('yc', 3, 'i love ...'))


route.get('/vote/welcome', (req, res) => {
    res.status(200).send('Vote successfully')
})

route.get('/vote/studentVote', (req, res) => {
    const body = req.body
    const number = body.number

    player[number].addStudentScoure()
    res.status(200).send( JSON.stringify(player[number].getScore()) )
})

route.get('/vote/teacherVote', (req, res) => {
    const body = req.body
    const number = body.number

    player[number].addTeacherScore()
    res.status(200).send( JSON.stringify(player[number].getScore()) )
})

route.get('/vote/voteRankList', (_, res) => {
    const result = {
        player_0: player[0].printPlayer(),
        player_1: player[1].printPlayer()
    }
    res.status(200).send(JSON.stringify(result))
})

const PORT = '8090'
const ADD = '0.0.0.0'
route.listen('8090', ADD, () => {
    console.log(`The Vote server is running the ${ADD}:${PORT}`)
})
