const express = require('express')
const route = express.Router()
const services = require('../services/render')
const RootController = require('../controllers/RootController')
let Userdb = require("../models/RootModels");

route.get('/', RootController.home)
route.get('/add/user', RootController.addUser)
route.post('/add/user', RootController.addUserSave)
route.get("/update/user/:id", RootController.getEditUserController)
route.post("/update/user/:id", RootController.saveEditUserController);
route.get("/delete/:id", RootController.deleteUserController)

module.exports = route 