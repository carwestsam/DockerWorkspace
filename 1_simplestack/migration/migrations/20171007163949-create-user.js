'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        nickName: {
          type: Sequelize.STRING
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInteface.dropTable('users')
  }
};
