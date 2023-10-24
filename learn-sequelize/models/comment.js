const Sequelize = require('sequelize');

class Comment extends Sequelize.Model{
    static init(sequelize) {
        return super.init(
            {
                comment: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                }
            },
            {
                sequelize,
                timestemps: false,
                underscore: false,
                modelName: 'Comment',
                tableName: 'comment',
                paranoid: false,
                charset: 'utf8',
                collate:'utf8_unicode_ci',
            }
        )
    }
    static associate(db) {
        db.User.hasMany(db.User, {
            foreignKey: 'commenter',
            sourceKey: 'id',
        })
    }
}
model.exports = Comment;