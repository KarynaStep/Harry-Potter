'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      Room.hasMany(models.User, {
        foreignKey: 'nameRoom',
      });
    }
  }
  Room.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
        },
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
