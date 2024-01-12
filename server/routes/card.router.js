const { Router } = require('express');
const CardController = require('../controllers/card.controller');
const { singleUpload } = require('../middlewares/upload.mw');
const { checkCard } = require('../middlewares/cards.mw');

const cardRouter = Router();

cardRouter
  .route('/')
  .post(singleUpload('picture'), CardController.createCard)
  .get(CardController.getCardsNotPro);

cardRouter.route('/pro').get(CardController.getCardPro);

cardRouter
  .route('/:idCard')
  .all(checkCard)
  .get(CardController.getCard)
  .patch(singleUpload('picture'), CardController.updateCard)
  .delete(CardController.deleteCard);

  

module.exports = cardRouter;
