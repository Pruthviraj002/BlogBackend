const mongoose = require("mongoose")
const express = require("express")
require("dotenv/config")
const BlogRoute = require("./Route/BlogRoute")
const UserRoute = require("./Route/userRoute")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to my blog")
})

app.use("/api/Blog", BlogRoute)
app.use("/api/User", UserRoute)

app.listen(process.env.PORT)

async function DB() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = res.STATES.connected
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

DB()