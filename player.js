const Vote = require('./vote')

class Player{

    constructor(name, number, introduction) {
        this.name = name
        this.number = number
        this.introduction = introduction

        this.vote = new Vote()
    }

    addStudentScoure = () => {
        this.vote.addStudnetVoteNumber()
    }

    addTeacherScore = () => {
        this.vote.addTeacherVoteNumber()
    } 
    
    getScore = () => {
        return this.vote.getScore()
    }

    printPlayer = () => {
        let result = {
            name: this.name,
            number: this.number,
            source: this.getScore()
        }
        // console.log(result)
        return result
    }
}

module.exports = Player