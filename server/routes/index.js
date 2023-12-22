const { Router } = require('express');
const cardRouter = require('./card.router');
const roomRouter = require('./room.router');
const userRouter = require('./user.router');

const router = Router();

router.use('/cards', cardRouter);
router.use('/rooms', roomRouter);
router.use('/users', userRouter);

module.exports = router;
