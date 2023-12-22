const createError = require('http-errors');
const { Card } = require('../models');

module.exports.checkCard = async (req, res, next) => {
  try {
    const {
      params: { idCard },
    } = req;
    const cardInstance = await Card.findByPk(idCard);
    if (!cardInstance) {
      return next(createError(404, 'Card not found!!!'));
    }
    req.cardInstance = cardInstance;
    next();
  } catch (error) {
    next(error);
  }
};
