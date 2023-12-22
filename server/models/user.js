'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Card, {
        foreignKey: 'idCard',
      });
      User.belongsTo(models.Room, {
        foreignKey: 'nameRoom',
      });
    }
  }
  User.init(
    {
      nameUser: {
        field: 'name_user',
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      underscored: true,
    }
  );
  return User;
};
