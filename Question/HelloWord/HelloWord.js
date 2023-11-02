const ExecuteC = require('../executeC')
const fs = require('fs')

class HelloWord {
    constructor(aboslutlyPath, userId, inputData) {
        const data = "#include <stdio.h> \n int main() \n { printf(\"Hello Word\"); return 0; }"
        // this.executeC = new ExecuteC("/home/Bear/htmlAndCss/Vote/Question/HelloWord/test.c", `${userId}`, data)
        this.executeC = new ExecuteC("/test.c", `${userId}`, data)
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

    checkout_c = async() => {
        // if instantiate a class without not all paramets
        // input abslutly path for exe_function
        await this.executeC.execute_c_file()
    }

    getFlag = () => { 
        while(true) {
            if ( fs.existsSync('./output') == false ) continue
            console.log('exesits')
            return true
        }
    }

}

module.exports = HelloWord

// const T = new HelloWord(1,1,1)
// T.checkout_c()
// console.log(T.getFlag())