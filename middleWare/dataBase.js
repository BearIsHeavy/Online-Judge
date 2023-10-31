const { rejects } = require('assert')
const { truncate } = require('fs')
const mysql = require('mysql')
const { resolve } = require('path')
const { emit } = require('process')

const connection = mysql.createConnection({
    host:'localhost',
    user: 'bear',
    password: '123',
    database: 'LoginInfo'
})

connection.connect(err => {
    if (err) throw err
    console.log('Connected to the database!')
})

class MySQL {

    constructor() {

    }

    #checkoutExists = (email) => {
        // account exists return true
        // not exists return false
        const data = [email]
        
        const promise = new Promise((resolve, rejects) => {
            connection.query("select email from UserInfo where email = ?", data, (err, result) => {
                if (err) {
                    console.log(err)
                    rejects(err)
                }
                if (result.length != 0) {
                    resolve(true)
                    return
                }
                resolve(false)
            })
        })
        return promise
    }

    addUserInfo = async(email, name, password, login_laster_time) => {
        let flag
        await this.#checkoutExists(email)
        .then(result => {
            flag = result
        }).catch(err => {
            return null
        })
        // console.log(flag)
        if (flag == true) {
            console.log('your email has been used !!')
            return null
        }
        const insertData = {
            email: email,
            name: name,
            password: password,
            login_laster_time: login_laster_time
        }
        connection.query("INSERT INTO UserInfo SET ?", insertData, (err, result) => {
            if (err) {
                console.log(err)
                return err
            }
            console.log("insert statement is successfully !! ")
        })
    }

    getPassword = async (email) => {
        let flag = null
        await this.#checkoutExists(email)
        .then(result => {
            // console.log("result" + result)
            flag = result
        })
        .catch(err => {
            console.log(err)
            return null
        })
        //account is empty
        // console.log("flag" + flag)
        if (flag === false) {
            console.log("please register a account...")
            return null
        }
        const data = [email]
        const promise = new Promise((resolve, rejects) => {
            connection.query("SELECT password FROM UserInfo WHERE email = ?", data, (err, result) => {
                if (err) rejects(err)
                resolve(result[0].password)
            })
        })
        return promise

    }

}

module.exports = MySQL