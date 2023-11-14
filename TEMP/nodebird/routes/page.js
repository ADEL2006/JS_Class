const express =require('express');
const { renderMain, renderJoin, renderProfile } = require('../controller/page');
const router = express.Router();

router.use((req,res,next)=>{
    res.locals.user = null;
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followingList = [];
    next();
});
router.get('/',renderMain);
router.get('/join',renderJoin);
router.get('/profile',renderProfile);

module.exports = router;