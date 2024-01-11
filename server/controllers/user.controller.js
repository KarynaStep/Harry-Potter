const _ = require('lodash');
const createError = require('http-errors');
const { Room, User, Card } = require('../models');
const attrs = ['nameUser', 'idCard', 'nameRoom'];

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const values = _.pick(body, attrs);

    const card = await Card.findByPk(values.idCard);
    if (!card) {
      return next(createError(404, 'Card not found'));
    }

    const [room, created] = await Room.findOrCreate({
      where: { name: values.nameRoom },
      defaults: {
        standardDeck: true,
        proDeck: false,
      },
    });

    const user = await User.create(values);
sendUsersByRoom()
    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const { userInstance } = req;
    res.status(200).send({ data: userInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      return res.status(204).send({ data: 'User list is empty' });
    }
    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.sendUsersByRoom = async (req, res, next) => {
  try {
    const { body } = req 
    const values = _.pick(body, attrs);

    const users = await User.findAll({
      where: { nameRoom: values.nameRoom },
      include:
        {
          model: Card,
        }
    });
    if (users.length === 0) {
      return res.status(204).send({ data: 'User list is empty' });
    }
    
      res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const { body, userInstance } = req;
    const values = _.pick(body, attrs);

    if (values.idCard) {
      const card = await Card.findByPk(values.idCard);
      if (!card) {
        return next(createError(404, 'Card not found'));
      }
    }

    if (values.nameRoom) {
      const [room, created] = await Room.findOrCreate({
        where: { name: values.nameRoom },
        defaults: {
          standardDeck: true,
          proDeck: false,
        },
      });
    }

    const updatedUser = await userInstance.update(values);
    if (!updatedUser) {
      return next(createError(404, 'User not updated'));
    }
    return res.status(200).send({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const { userInstance } = req;
    const result = await userInstance.destroy();
    return res.status(200).send({ data: userInstance });
  } catch (error) {
    next(error);
  }
};
