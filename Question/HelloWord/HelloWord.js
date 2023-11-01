const { exec } = require('child_process')
const ExecuteC = require('../executeC')

class XPlusY {
    constructor(aboslutlyPath, userId, inputData) {
        const data = "#include <stdio.h> \n int main() \n { printf(\"hello world\"); return 0; }"
        this.executeC = new ExecuteC("/home/Bear/OnlieJudge/Question/HelloWord/test.c", "1", data)
    }

    // fetch question descrition
    getQuestionDescribtion = () => {
        const str = "Please calculate the value of x and y"
        return str
    }

    checkout_c = () => {
        this.executeC.execute_c_file()
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }

}

module.exports = XPlusY

const T = new XPlusY()
T.checkout_c()
// T.execut_C('test.c', 'bear').then(result => console.log(result))
// T.checkAnswer('test.c', 'bear').then(result => console.log(result)).catch(err => console.log(err))
// console.log(T.checkAnswer('hello world'))
// console.log(T.getAnswer())