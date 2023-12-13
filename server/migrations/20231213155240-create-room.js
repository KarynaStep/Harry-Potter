'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameRoom: {
        field: 'name_room',
        allowNull: false,
        type: Sequelize.STRING,
      },
      nameUser1: {
        field: 'name_user1',
        type: Sequelize.STRING,
      },
      cardUser1: {
        field: 'card_user1',
        type: Sequelize.INTEGER,
        references: {
          model: 'cards',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'restrict',
      },
      nameUser2: {
        field: 'name_user2',
        type: Sequelize.STRING,
      },
      cardUser2: {
        field: 'card_user2',
        type: Sequelize.INTEGER,
        references: {
          model: 'cards',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'restrict',
      },
      nameUser3: {
        field: 'name_user3',
        type: Sequelize.STRING,
      },
      cardUser3: {
        field: 'card_user3',
        type: Sequelize.INTEGER,
        references: {
          model: 'cards',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'restrict',
      },
      nameUser4: {
        field: 'name_user4',
        type: Sequelize.STRING,
      },
      cardUser4: {
        field: 'card_user4',
        type: Sequelize.INTEGER,
        references: {
          model: 'cards',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'restrict',
      },
      nameUser5: {
        field: 'name_user5',
        type: Sequelize.STRING,
      },
      cardUser5: {
        field: 'card_user5',
        type: Sequelize.INTEGER,
        references: {
          model: 'cards',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'restrict',
      },
      nameUser6: {
        field: 'name_user6',
        type: Sequelize.STRING,
      },
      cardUser6: {
        field: 'card_user6',
        type: Sequelize.INTEGER,
        references: {
          model: 'cards',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'restrict',
      },
      standardDeck: {
        field: 'standard_deck',
        type: Sequelize.BOOLEAN,
      },
      proDeck: {
        field: 'pro_deck',
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('rooms');
  },
};
