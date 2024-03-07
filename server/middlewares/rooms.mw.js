const createError = require('http-errors');
const { Room } = require('../models');

module.exports.checkRoom = async (req, res, next) => {
  try {
    const {
      params: { idRoom },
    } = req;
    const roomInstance = await Room.findByPk(idRoom);
    if (!roomInstance) {
      return next(createError(404, 'Room not found!'));
    }
    req.roomInstance = roomInstance;
    next();
  } catch (error) {
    next(error);
  }
};
