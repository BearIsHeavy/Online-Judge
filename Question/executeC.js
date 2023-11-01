const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')
const { stderr } = require('process')

class ExecutC {
    constructor(filePath, userId) {
        this.path = filePath
        this.id = userId
        this.dirname = path.dirname(filePath)
        this.fileName = path.basename(filePath)
    }

    write_c_file = (data) => {
        fs.writeFile(this.path, data, err => {
            if (err) throw err;
        })
    }

    execute_c_file = () => {
        return new Promise((resolve, rejects) => {
            const command = `gcc ${this.path} -o ${this.dirname}/${userId} && ./${this.dirname}/${this.fileName}`
            exec(command, (error, stdout, stderr) => {
                if (error) throw error
                if (stderr) {
                    console.log(stderr)
                    resolve(stderr)
                }
                resolve(stdout)
            })
        })
    }

    delete_c_file = () => {

    }

}

module.exports = ExecutC