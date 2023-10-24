const express = require('express');

const router = express.Router();

const members = [
    { memberId:1, name:'ABC' },
    { memberId:2, name:'ABD' }
];

router.get('/', (req, res)=>{
    res.json(members);
});

router.get('/:id', (req, res)=>{
    
})

router.get('/')
module.exports = router;