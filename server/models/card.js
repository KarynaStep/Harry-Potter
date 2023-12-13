'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      Card.hasMany(models.Room, {
        foreignKey: 'card_user1',
      });
      Card.hasMany(models.Room, {
        foreignKey: 'card_user2',
      });
      Card.hasMany(models.Room, {
        foreignKey: 'card_user3',
      });
      Card.hasMany(models.Room, {
        foreignKey: 'card_user4',
      });
      Card.hasMany(models.Room, {
        foreignKey: 'card_user5',
      });
      Card.hasMany(models.Room, {
        foreignKey: 'card_user6',
      });
    }
  }
  Card.init(
    {
      name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      picture: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Card',
      tableName: 'cards',
      underscored: true,
    }
  );
  return Card;
};
