const { Router } = require('express');
const UserController = require('../controllers/user.controller');
const { checkUser } = require('../middlewares/users.mw');

const userRouter = Router();

userRouter
  .route('/')
  .get(UserController.getAllUsers)
  .patch(UserController.sendUsersByRoom)
  .delete(UserController.deleteUser);

userRouter
  .route('/:idUser').all(checkUser)
  .get(UserController.getUser)
  

module.exports = userRouter;
