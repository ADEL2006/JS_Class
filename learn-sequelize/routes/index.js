const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', (req, res, next) => {
    const users = User.findAll();
});
