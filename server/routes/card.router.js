const { Router } = require('express');
const multer = require('multer');

const CardController = require('../controllers/card.controller');
const { checkCard } = require('../middlewares/cards.mw');

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const cardRouter = Router();

cardRouter
  .route('/')
  .post(upload.single('picture'), CardController.createCard)
  .get(CardController.getCardsNotPro);

cardRouter.route('/pro').get(CardController.getCardPro);

cardRouter
  .route('/:idCard')
  .all(checkCard)
  .get(CardController.getCard)
  .patch(upload.single('picture'), CardController.updateCard)
  .delete(CardController.deleteCard);

  
module.exports = cardRouter;
