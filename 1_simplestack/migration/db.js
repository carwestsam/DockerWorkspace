databaseUrl = process.env.DB_URL || 'database';
username = process.env.DB_USERNAME || 'postgres';
password = process.env.DB_PASSWORD || 'postgres';
dbName = process.env.DB_NAME || 'database'

const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbName, username, password, {
    host: databaseUrl,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
