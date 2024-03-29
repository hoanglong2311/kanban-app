const User = require('../models/user')
const CryptoJS = require('crypto-js')
const jsonWebtoken = require('jsonwebtoken')

exports.register = async (req, res) =>{
    const { password } = req.body
    try {
        req.body.password = CryptoJS.AES.encrypt(
            password,
            process.env.PASSWORD_SECRET_KEY,
        )

        const user = await User.create(req.body)
        const token = jsonWebtoken.sign(
            { id: user._id },
            process.env.TOKERN_SECRET_KEY,
            { expiresIn: '24h' },
        )
        res.status(200).json({ user, token })
    } catch (err){
        res.status(500).json({message: err.message})
    }
}

exports.login = async (req, res) =>{
     const { username, password } = req.body
    try{
         const user = await User.findOne({ username }).select('password username')
        if(!user){
            return res.status(401).json({
                errors: {
                    param: 'username',
                    msg: 'Invalid username or password'
                }
            })
        }

        const decryptedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASSWORD_SECRET_KEY,
        ).toString(CryptoJS.enc.Utf8)

        if(decryptedPassword !== password){
            return res.status(401).json({
                errors: {
                    param: 'password',
                    msg: 'Invalid username or password'
                }
            })
        }

        user.password = undefined

        const token = jsonWebtoken.sign(
            { id: user._id },
            process.env.TOKERN_SECRET_KEY,
            { expiresIn: '24h' },
        )

        res.status(200).json({ user, token })
    } catch (err)  {
        res.status(500).json({message: err.message});
    }
}