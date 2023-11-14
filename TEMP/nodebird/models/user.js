const Sequelize = require('sequelize');
class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.initiate({
            email: {
                type: Sequelize.STRING(40),
                allowNull:true,
                unique: true,
            },
            nick: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            provider: {
                type: Sequelize.ENUM('local', 'kakao'),
                allowNull: false,
                defaultValue: 'local',
            },
            snsId: {
                type: Sequelize.STRING(30),
                allowNull: true,
            }
        })
    }
    static associated(db) {

    }
}