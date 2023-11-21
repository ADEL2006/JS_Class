const express = require('express');
const passport = require('passport');

const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const { login } = require('../constroller/auth');

const router = express.Router();

router.post('/login', isNotLoggedIn, login);