const express = require('express');

const { isLoggedIn } = require('../middlewares');
const { follow, unfollow, editnick } = require('../controllers/user');

const router = express.Router();

// POST /user/:id/follow
router.post('/:id/follow', isLoggedIn, follow);
router.delete('/:id/unfollow', isLoggedIn, unfollow);
router.put('/', isLoggedIn, editnick);


module.exports = router;
