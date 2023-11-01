const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('number1: ' + parseInt(req.query.num1) + ', number2: ' + parseInt(req.query.num2) + ', sum: ' + (parseInt(req.query.num1) + parseInt(req.query.num2)));
    res.render('add', {number1: req.query.num1, number2: req.query.num2, sum: parseInt(req.query.num1) + parseInt(req.query.num2)});
})

module.exports = router;
