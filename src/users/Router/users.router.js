const router = require("express").Router();

const usersServices = require("../Services/users.services");

router.get("/users", usersServices.getUsers);

router.post("/users", usersServices.createNewUser);

router.get("/users/:id", usersServices.getOneUsers);

module.exports = router;
