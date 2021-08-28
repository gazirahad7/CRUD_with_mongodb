let Userdb = require('../models/RootModels')
const RootController = {
  home: async (req, res) => {
    const user = await Userdb.find();
    res.render("pages/home", { user });
  },
  addUser: async (req, res) => {
    res.render("pages/addUser");
  },
  addUserSave: async (req, res) => {
    const newUser = new Userdb(req.body);
    await newUser.save();
    res.redirect("/");
  },
  getEditUserController: async (req, res) => {
    const user = await Userdb.findById(req.params.id);
    console.log("a user", user);
    res.render("pages/updateUser", { user });
  },
  saveEditUserController: async (req, res) => {
    const { id } = req.params;
    await Userdb.update({ _id: id }, req.body);
    res.redirect("/");
  },
  deleteUserController: async (req, res) => {
     const { id } = req.params;
     await Userdb.remove({ _id: id });
     res.redirect("/");
  }
};
//
module.exports = RootController