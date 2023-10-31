class Vote {
    constructor() {
        this.studentScore = 0
        this.teacherScore = 0
        this.personNumber = 0
    }

    addStudnetVoteNumber = () => {
        this.studentScore++
        this.personNumber++
    }

    addTeacherVoteNumber = () => {
        this.teacherScore++
        this.personNumber++
    }

    getStudnetScore = () => {
        return this.studentScore
    }

    getTeacherScore = () => {
        return this.teacherScore
    }

    getScore = () => {
        return this.teacherScore * 0.7 + this.studentScore * 0.3
    }

    // printVoteNumber = () => {
    //     const summary_score = this.studentScore * 0.3 + this.teacherScore * 0.7
    //     let result = {
    //         studentScore:this.studentScore,
    //         teacherScore:this.teacherScore,
    //         summary: summary_score
    //     }
    //     // console.log(result)
    //     return JSON.stringify(result)
    // }
}

module.exports = Vote