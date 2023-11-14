exports.renderMain = (req, res, next) => {
    const twits = [];
    res.render('main', {
        title: 'NodeBird',
        twits,
    });
};
exports.renderJoin = (req, res) => {
    res.render('join', {
        title: '회원가압 - NodeBird'
    });
};
exports.renderProfiles = (req, res) => {
    res.render('profiles', {
        title : '내정보 - NodeBird'
    });
};
