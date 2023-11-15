const Sequelize = require('sequelize');
class Post extends Sequelize.Model {
    static initiate(sequelize) {
        Post.init({
            content: {
                type: Sequelize.STRING(200),
                allowNull: false,
                unique: true,
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Hashtag',
            tableName: 'Hashtags',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        })
    }
    static associate(db) {
        db.Post.belongsTo(db.User);
        db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'});
    }
}
module.exports = Post;