const ExecuteC = require('../executeC')
const fs = require('fs')
const path = require('path')

class HelloWord {
    constructor(relativePath, userId, inputData) {
        // this.executeC = new ExecuteC("/HelloWord/test.c", `${userId}`, data)
        this.executeC = new ExecuteC(relativePath, userId, inputData)
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
        // input relative path for exe_function
        this.executeC.execute_c_file()
        .then(result => {
            console.log(result)
            while (true) {
                const _path = path.join(__dirname + '/output')
                // console.log(_path)
                if (fs.existsSync(_path) == false) continue
                fs.unlinkSync(path.join(__dirname + "/output"))
                break
            }
        })
        .catch(err => {
            console.log(err)
        })
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

// const T = new HelloWord()
// T.checkout_c()
// console.log(T.getFlag())