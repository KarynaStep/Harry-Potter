'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      Room.belongsTo(models.Card, {
        foreignKey: 'card_user1',
      });
      Room.belongsTo(models.Card, {
        foreignKey: 'card_user2',
      });
      Room.belongsTo(models.Card, {
        foreignKey: 'card_user3',
      });
      Room.belongsTo(models.Card, {
        foreignKey: 'card_user4',
      });
      Room.belongsTo(models.Card, {
        foreignKey: 'card_user5',
      });
      Room.belongsTo(models.Card, {
        foreignKey: 'card_user6',
      });
    }
  }
  Room.init(
    {
      nameRoom: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      nameUser1: {
        field: 'name_user1',
        type: DataTypes.STRING,
      },
      nameUser2: {
        field: 'name_user2',
        type: DataTypes.STRING,
      },
      nameUser3: {
        field: 'name_user3',
        type: DataTypes.STRING,
      },
      nameUser4: {
        field: 'name_user4',
        type: DataTypes.STRING,
      },
      nameUser5: {
        field: 'name_user5',
        type: DataTypes.STRING,
      },
      nameUser6: {
        field: 'name_user6',
        type: DataTypes.STRING,
      },
      standardDeck: {
        field: 'standard_deck',
        type: DataTypes.BOOLEAN,
      },
      proDeck: {
        field: 'pro_deck',
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Room',
      tableName: 'rooms',
      underscored: true,
    }
  );
  return Room;
};
