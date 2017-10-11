var Sequelize = require('sequelize');
var path = require('path');

var sequelize = new Sequelize(process.env.DB_URL || "postgres://postgres:postgres@database/postgres", {
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
module.exports = sequelize;
