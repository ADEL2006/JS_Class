const express = require('express');
const { renderMain, renderJoin, renderProfile } = require('../controller/page');
const router = express.Router();

router.get('/', renderMain);