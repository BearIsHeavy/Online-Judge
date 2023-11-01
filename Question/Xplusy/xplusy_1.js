const { exec } = require('child_process')
const path = require('path')

class XPlusY {
    constructor() {

    }

    getQuestionDescribtion = () => {
        const str = "Please calculate the value of x and y"
        return str
    }

    #execut_C = (filePath, userName) => {
        const promise = new Promise((resolve, rejects) => {
            exec(`gcc /home/Bear/htmlAndCss/Vote/Question/Xplusy/test.c  -o /home/Bear/htmlAndCss/Vote/Question/Xplusy/test && ./test`, (err, stdout, stderr) => {
                if(err) {
                    console.log('running C language occur errors throw error' + err + '\n')
                    throw err
                    rejects(err)
                }
                if(stderr) {
                    console.log('running C language occur errors' + stderr + '\n')
                    rejects(stderr)
                }
                resolve(stdout)
            })
        })
        return promise
    }

    #getCorrectAnswer = () => {
        const resultData = {
            "1":3,
            "2":5
        }
        return resultData
    }

    checkAnswer = async (filePath, userName) => {
        // filePath = path.basename(filePath)
        let correct_answer
        await this.#execut_C(filePath, userName)
        .then(result => {
            correct_answer = result
        })
        .catch(err => {
            console.log("occur errors" + err)
        })
        // console.log(correct_answer)
        return new Promise((resolve, rejects) => {
            // const answer = this.#getCorrectAnswer()
            const answer = "hello world"
            if (correct_answer == answer) {
                console.log(correct_answer)
                resolve(true)
            }
            rejects(false)
        })
    }



}

module.exports = XPlusY

// const T = new XPlusY()
// T.execut_C('test.c', 'bear').then(result => console.log(result))
// T.checkAnswer('test.c', 'bear').then(result => console.log(result)).catch(err => console.log(err))
// console.log(T.checkAnswer('hello world'))
// console.log(T.getAnswer())