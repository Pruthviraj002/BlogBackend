const User = require("../Model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

exports.getUser = async (req, res) => {
    try {
        const data = await User.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postUser = async (req, res) => {
    try {
        const uSerExits = await User.findOne({ email: req.body.email })
        if (uSerExits) return res.status(500).json({ errors: true, message: "user Already Exist" })

            const salt = await bcrypt.genSalt(10)

        req.body.password = await bcrypt.hash(req.body.password, salt)


        const data = await User.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.putUser = async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.body.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        const uSerExits = await User.findOne({ email: req.body.email })
        if (!uSerExits) return res.status(500).json({ errors: true, message: "email or password is invalid" })

        const passwordVerified = await bcrypt.compare(req.body.password, uSerExits.password)
        if (!passwordVerified) return res.status(500).json({ errors: true, message: "email or password is invalid" })

        const token = await jwt.sign({ _id: uSerExits._id }, process.env.SEC)
        return res.json({ errors: false, data: { token: token, user: uSerExits } })


    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}