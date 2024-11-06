const express = require('express');

const {createUser , getUsers} = require('../services/userService')

const router = express.Router();

router.route("/" ).post(createUser).get(getUsers);


module.exports = router;