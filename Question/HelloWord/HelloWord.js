const ExecuteC = require('../executeC')

class HelloWord {
    constructor(aboslutlyPath, userId, inputData) {
        const data = "#include <stdio.h> \n int main() \n { printf(\"Hello World\"); return 0; }"
        this.executeC = new ExecuteC("/home/Bear/OnlieJudge/Question/HelloWord/test.c", `${userId}`, data)
        this.flag = null
    }

    // fetch question descrition
    getQuestionDescribtion = () => {
        const str = "Please checkout your environment \n please type \"hello Word\""
        return str
    }

    #getCorrectResult = () => {
        return "Hello Word"
    }

    checkout_c = () => {
        // if instantiate a class without not all paramets
        // input abslutly path for exe_function
        this.executeC.execute_c_file()
        .then(result => {
            console.log(result)
            if (result == this.#getCorrectResult()) {
                this.flag = true
                return
            } else {
                this.flag = false
                return
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    getFlag = () => { this.flag }

}

module.exports = HelloWord

const T = new HelloWord()
T.checkout_c()
console.log(T.getFlag())