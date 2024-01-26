const { Router } = require('express');
const CardController = require('../controllers/card.controller');
const { singleUpload } = require('../middlewares/upload.mw');
// singleUpload('picture');
const { checkCard } = require('../middlewares/cards.mw');

const multer = require('multer');

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
  .patch(singleUpload('picture'), CardController.updateCard)
  .delete(CardController.deleteCard);

  
module.exports = cardRouter;
