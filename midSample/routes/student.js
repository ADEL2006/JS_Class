const express = require('express');
const router = express.Router();

const students = ['kang', 'kim', 'park', 'moon'];

router.get('/', (req, res) => {
    console.log('search: ' + typeof(parseInt(req.query.search)) + ', name: ' + req.query.name);
    res.send('Student OK....');
})

router.get('/:idx', (req, res) => {
    let index = req.params.idx;
    res.send('Student Param['+ index +'] = ' + students[index]);
})

module.exports = router;