const jwt = require('jsonwebtoken')

class Jwt {
    create_token = (_id, _email) => {
        const token = jwt.sign(
            {user_id: _id, _email},
            process.env.TOKEN_KEY
        )
    }

}