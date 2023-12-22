const _ = require('lodash');
const createError = require('http-errors');
const { Room } = require('../models');
const attrs = ['name', 'standardDeck', 'proDeck'];

module.exports.createRoom = async (req, res, next) => {
  try {
    const { body } = req;
    const values = _.pick(body, attrs);
    const createdRoom = await Room.create(values);
    if (!createdRoom) {
      return next(createError(400, 'Room not created'));
    }

    res.status(201).send({ data: createdRoom });
  } catch (error) {
    next(error);
  }
};

module.exports.getRoom = async (req, res, next) => {
  try {
    const { body } = req;
    const values = _.pick(body, attrs);
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

module.exports.updateRoom = async (req, res, next) => {
  try {
    const { body, roomInstance } = req;
    const values = _.pick(body, attrs);
    const updatedRoom = await roomInstance.update(values);
    if (!updatedRoom) {
      return next(createError(404, 'Room not updated'));
    }
    return res.status(200).send({ data: updatedRoom });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteRoom = async (req, res, next) => {
  try {
    const { roomInstance } = req;
    const result = await roomInstance.destroy();
    return res.status(200).send({ data: roomInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.getRoomForName = async (req, res, next) => {
  try {
    const { body } = req;
    const values = _.pick(body, attrs);

    const room = await Room.findOne({ where: { name: values.name } });
    if (!room) {
      return next(createError(404, 'Room not updated'));
    }

    res.status(200).send({ data: room });
  } catch (error) {
    next(error);
  }
};

// const [room, created] = await Room.findOrCreate({
//   where: { name: values.nameRoom },
//   defaults: {
//     standardDeck: true,
//     proDeck: false,
//   },
// });
