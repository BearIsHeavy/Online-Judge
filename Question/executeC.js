const { exec } = require('child_process')
const fs = require('fs')
const _path = require('path')

class ExecutC {

    constructor(relativePath, userId, data) {
        //this id is User Id
        this.id = userId    
        //this path is obslutly path
        this.path = _path.join(__dirname + relativePath) 
        // parent file path
        this.dirname = _path.join(__dirname + _path.dirname(relativePath)) 
        // fetch file name
        this.fileName = _path.basename(relativePath)
        // fetch data
        this.data = data
    }

    // create a C file with c language code
    #write_c_file = (_path = this.path, _data = this.data) => {
        fs.writeFileSync(_path, _data, err => {
            if (err) throw err;
            console.log('file created ..')
        })
    }



    // delete existing cache file
    // include remove c file, and remove c.exe file
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

    //write you code to
    #write_output =(_fileName, _data = null) => {
        const _path_ = this.dirname + _fileName;
        fs.writeFileSync(_path_, _data, err => {
            if (err) throw err
            console.log(`${_data} loaded to ${this.dirname}+/${_fileName}`)
        })
    }

    // execute a file, create a executing file
    // and write the result to output file
    execute_c_file = (_path = this.path, _dirname = this.dirname, _id = this.id) => {
        this.#write_c_file()

        // running c file
        return new Promise((resolve, rejects) => {
            const command = `gcc ${_path} -o ${_dirname}/${_id} && ${_dirname}/${_id}`
            exec(command, (error, stdout, stderr) => {
                if (error) throw error
                if (stderr) {
                    // console.log("stand error: " + stderr)
                    this.#write_output(_path, stderr)
                    resolve(stderr)
                }
                // input c running stand out to outputfile
                this.#write_output('/output', stdout)
                // delete c cach file
                this.#delete_c_file()
                resolve(stdout)
            })
        })
    }
}

module.exports = ExecutC

//Test
// const data = "#include <stdio.h> \n int main() \n { printf(\"hello world\"); return 0; }"
// const execute = new ExecutC("/home/Bear/htmlAndCss/Vote/Question/HelloWord/test.c", "1", data)
// execute.execute_c_file().then(result => console.log(result))

