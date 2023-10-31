const MySQL = require('../middleWare/dataBase')

class Login {
    constructor() {
        this.token = ""
        this.mysql = new MySQL()
    }    

    register = (email, name, password, login_laster_time) => {
        this.mysql.addUserInfo(email, name, password, login_laster_time);
    }

    toLogin = async (email, password) => {
        let __password = null
        await this.mysql.getPassword(email)
        .then(result => {
            // console.log("__password111" + result)
            __password = result
        })
        .catch(err => {
            console.log("toLogin occury error" + err)
        })
        if (__password == password) {
            // console.log("__password" + __password)
            return true
        }
        return false
    }

}

module.exports = Login
