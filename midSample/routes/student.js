const express = require('express');
const router = express.Router();

const students = ['kang', 'kim', 'park', 'moon'];

router.get('/', (req, res) => {
    res.send('Student OK....');
})

router.get('/:idx', (req, res) => {
    let index = students[req.params.idx];
    res.send('Student Param: '+ index);
})

module.exports = router;