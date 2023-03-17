
const router = require("express").Router();

const { admin,register, login } = require("../controllers/usersController");
const accessAdmin = require("../middlewares/accessAdmin");
router  
    .get("/register", register)
    .get("/login",login)
    .post("/login", accessAdmin, admin);


module.exports = router