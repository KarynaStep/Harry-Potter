const _ = require('lodash');
const createError = require('http-errors');
const { Op } = require('sequelize');
const { Room } = require('../models');
const attrs = ['name', 'standardDeck', 'proDeck'];

module.exports.createRoom = async (req, res, next) => {
  try {
    const { body } = req;
    const values = _.pick(body, attrs);
   
    const room = await Room.findOne({ where: { name: values.name } });
    if (room) {
      return res.status(200).send({ data: room });
    }

    const newRoom = await Room.create(values);
    res.status(201).send({ data: newRoom });

  } catch (error) {
    next(error);
  }
};

module.exports.getRoom = async (req, res, next) => {
  try {
    const { roomInstance } = req;
    res.status(200).send({ data: roomInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.findAll();
    if (rooms.length === 0) {
      return res.status(204).send({ data: 'Room list is empty' });
    }
    res.status(200).send({ data: rooms });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteRoom = async (req, res, next) => {
  try {
    const date = new Date();
    const dateForDel = date.setHours(date.getHours() - 2);
    const delRoom = await Room.destroy({
      where: {
        updated_at: {
          [Op.lt]: dateForDel,
        },
      },
    });
    return res.status(200).send({ data: delRoom });
  } catch (error) {
    next(error);
  }
};

module.exports.getRoomForName = async (req, res, next) => {
  try {
    const { body } = req;
    const values = _.pick(body, attrs);
    
    const room = await Room.findOne({ where: { name: values.name} });
    if (room === null) {
      return next(createError(404, 'Room not find'));
    }
    res.status(200).send({ data: room });
  } catch (error) {
    next(error);
  }
};
