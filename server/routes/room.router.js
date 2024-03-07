const { Router } = require('express');
const RoomController = require('../controllers/room.controller');
const { checkRoom } = require('../middlewares/rooms.mw');

const roomRouter = Router();

roomRouter
  .route('/')
  .post(RoomController.createRoom)
  .patch(RoomController.getRoomForName)
  .get(RoomController.getAllRooms)
  .delete(RoomController.deleteRoom);

roomRouter
  .route('/:idRoom')
  .all(checkRoom)
  .get(RoomController.getRoom)
  

module.exports = roomRouter;
