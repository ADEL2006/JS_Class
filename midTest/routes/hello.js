const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('hello');
})

router.get('/:idx', (req, res) => {
    let index = req.params.idx;
    res.render('hello', { index });
})

module.exports = router;
