const { Router } = require('express');
const UserController = require('../controllers/user.controller');
const { checkUser } = require('../middlewares/users.mw');

const userRouter = Router();

userRouter
  .route('/')
  .get(UserController.getAllUsers)
  .post(UserController.createUser)
  .patch(UserController.sendUsersByRoom);

userRouter
  .route('/:idUser').all(checkUser)
  .get(UserController.getUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = userRouter;
