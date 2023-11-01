const express = require('express');
const router = express.Router();

const users = [['Sam', 18], ['Jack', 19], ['John', 18]];

router.get('/', (req, res) => {
    res.render('users', {users});
})

router.get('/:idx', (req, res) => {
    let index = req.params.idx;
    // res.send('Student Param[' + index + '] = ' + students[index]);
    // let name = students[index];
    res.render('student', {students});
})

module.exports = router;