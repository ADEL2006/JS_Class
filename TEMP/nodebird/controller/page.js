exports.renderMain = (req,res,next) =>{
    const twits = [];
    res.render('main',{
        title: 'NodeBird',
        twits,
    })
};
exports.renderJoin = (req,res) =>{
    res.render('join',{
        title: '회원가입 - NodeBird'
    });
};
exports.renderProfile = (req,res)=>{
    res.render('profile',{
        title: '내정보 - NodeBird'
    })
};