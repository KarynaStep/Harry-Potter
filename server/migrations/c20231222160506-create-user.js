'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameUser: {
        field: 'name_user',
        type: Sequelize.STRING,
        allowNull: false,
      },
      idCard: {
        field: 'id_card',
        type: Sequelize.INTEGER,
        references: {
          model: 'cards',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      nameRoom: {
        field: 'name_room',
        type: Sequelize.STRING,
        references: {
          model: 'rooms',
          key: 'name',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
