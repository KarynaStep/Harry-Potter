const _ = require('lodash');
const createError = require('http-errors');
const { Card } = require('../models');
const attrs = ['name', 'picture', 'description', 'isProDeck'];

module.exports.createCard = async (req, res, next) => {
  try {
    const { body, file } = req;
    const values = _.pick(body, attrs);
    if (file) {
      values.picture = file.filename;
    }
    const createdCard = await Card.create(values);
    if (!createdCard) {
      return next(createError(400, 'Card not created'));
    }

    res.status(201).send({ data: createdCard });
  } catch (error) {
    next(error);
  }
};

module.exports.getCard = async (req, res, next) => {
  try {
    const { cardInstance } = req;
    res.status(200).send({ data: cardInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.getCardsNotPro = async (req, res, next) => {
  try {
    const cards = await Card.findAll({
      where: {
        isProDeck: false,
      },
      attributes: {
        exclude: [
          'name',
          'picture',
          'description',
          'isProDeck',
          'createdAt',
          'updatedAt',
        ],
      },
    });
    const idCards = [];
    cards.forEach((card) => idCards.push(card.id));

    if (cards.length === 0) {
      return res.status(204).send({ data: 'Card list is empty' });
    }
    res.status(200).send({ data: idCards });
  } catch (error) {
    next(error);
  }
};

module.exports.updateCard = async (req, res, next) => {
  try {
    const { body, cardInstance, file } = req;
    const values = _.pick(body, attrs);
    if (file) {
      values.picture = file.filename;
    }
    const updatedCard = await cardInstance.update(values);
    if (!updatedCard) {
      return next(createError(404, 'Card not updated'));
    }
    return res.status(200).send({ data: updatedCard });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteCard = async (req, res, next) => {
  try {
    const { cardInstance } = req;
    const result = await cardInstance.destroy();
    return res.status(200).send({ data: cardInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.getCardPro = async (req, res, next) => {
  try {
    const cards = await Card.findAll({
      attributes: {
        exclude: [
          'name',
          'picture',
          'description',
          'isProDeck',
          'createdAt',
          'updatedAt',
        ],
      },
    });
    const idCardsPro = [];
    cards.forEach((card) => idCardsPro.push(card.id));
    if (cards.length === 0) {
      return res.status(204).send({ data: 'Card list is empty' });
    }
    res.status(200).send({ data: idCardsPro });
  } catch (error) {
    next(error);
  }
};
