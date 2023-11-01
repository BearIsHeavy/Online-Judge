const { exec } = require('child_process')
const fs = require('fs')
const _path = require('path')

class ExecutC {

    constructor(abslutlyPath, userId, data) {
        this.id = userId
        this.path = abslutlyPath
        this.dirname = _path.dirname(abslutlyPath)
        this.fileName = _path.basename(abslutlyPath)
        this.data = data
    }

    // create a C file with c language code
    #write_c_file = (_path = this.path, _data = this.data) => {
        fs.writeFileSync(_path, _data, err => {
            if (err) throw err;
        })
    }



    // delete existing cache file
    #delete_c_file = (_path = this.path, _dirname = this.dirname, _id = this.id) => {
        fs.unlink(_path, err => {
            if (err) throw err
            // console.log(`delte ${this.path} successfully`)
        })
        fs.unlink(`${_dirname}/${_id}`, err => {
            if (err) throw err
            // console.log(`delte ${this.dirname}/${this.id} successfully`)
        })
    }

    // execute a file create a executing file
    execute_c_file = (_path = this.path, _dirname = this.dirname, _id = this.id) => {
        this.#write_c_file()
        return new Promise((resolve, rejects) => {
            // const command = `gcc ${this.path} -o ${this.dirname}/${this.id} && . ${this.dirname}/${this.id}`
            const command = `gcc ${_path} -o ${_dirname}/${_id} && ./HelloWord/${_id}`
            exec(command, (error, stdout, stderr) => {
                if (error) throw error
                if (stderr) {
                    console.log("stand error: " + stderr)
                    resolve(stderr)
                }
                this.#delete_c_file()
                resolve(stdout)
            })
        })
    }
}

module.exports = ExecutC

//Test
// const data = "#include <stdio.h> \n int main() \n { printf(\"hello world\"); return 0; }"
// const execute = new ExecutC("/home/Bear/OnlieJudge/Question/Xplusy/test.c", "1", data)
// execute.execute_c_file().then(result => console.log(result))

