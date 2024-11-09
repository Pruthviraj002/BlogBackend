const {getBlog,postBlog,putBlog,deleteBlog} = require('../Controller/BlogController')
const { login } = require('../Controller/userController')
const Auth = require('../Middleware/Auth')

const route = require("express").Router()

route.get("/",getBlog)
route.post("/",Auth,postBlog)
route.post("/login",Auth,login)

route.put("/:id",Auth,putBlog)
route.delete("/:id",Auth,deleteBlog)

module.exports = route