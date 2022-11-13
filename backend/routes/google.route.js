const express = require('express')
const User = require('../models/google.model')
const { OAuth2Client } = require('google-auth-library')

const router = express.Router()

// const clientId = "233419149658-kvv0vd3go48fp56v22vr0qfoimvkp5tl.apps.googleusercontent.com";
const clientId = '589051674807-niu3snhvvldfvufjjf0emlb6sgfrvp1o.apps.googleusercontent.com';

const authClient = new OAuth2Client(clientId)

router.post('/', (req, res) => {
    const { idToken } = req.body;
    if (idToken) {
        authClient.verifyIdToken({ idToken, audience: clientId })
            .then(response => {
                // console.log(response)
                const { email_verified, email, name, picture } = response.payload
                if (email_verified) {
                    User.findOne({ email }).exec((err, user) => {
                        if (user) {
                            return res.json(user)
                        }
                        else {
                            let password = email + clientId
                            let newUser = new User({ email, name, picture, password });
                            newUser.save((err, data) => {
                                if (err) {
                                    return res.status.json({ error: "mongodb error" })
                                }
                                res.json(data)
                            })
                        }
                    })
                }
            })
            .catch(err => { console.log(err) })
    }
})

module.exports = router