var Sequelize = require('sequelize');
var db = require(__dirname + '/db.js');

var User = db.define('users', {
    nickName: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});

module.exports = User;