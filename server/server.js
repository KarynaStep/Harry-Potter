const http = require('http');
const app = require('./app.js');
const _ = require('lodash');
const { PORT, WEBSOCKET_EVENTS } = require('./constants.js');
const { Server } = require('socket.io');
const { Room, User, Card } = require('./models');

const port = process.env.PORT || PORT;
const server = http.createServer(app);

const io = new Server(server, {
  transport: ['websocket'],
  cors: {
    origin: 'http://localhost:5000',
  },
});

io.on('connection', (socket) => {
  console.log('a user connected socket');

  socket.on(WEBSOCKET_EVENTS.NEW_USER, async (newUser) => {
    try {
      const attrs = ['nameUser', 'idCard', 'nameRoom'];
      const values = _.pick(newUser[0], attrs);

      const card = await Card.findByPk(values.idCard);
      if (!card) {
        return next(createError(404, 'Card not found'));
      }
      const [room, created] = await Room.findOrCreate({
        where: { name: values.nameRoom },
        defaults: {
          standardDeck: true,
          proDeck: false,
        },
      });
      const user = await User.create(values);
      io.emit(WEBSOCKET_EVENTS.NEW_USER, user);
    } catch (error) {
      socket.emit(WEBSOCKET_EVENTS.ERR_USER, error);
    }
  });
  socket.on(WEBSOCKET_EVENTS.UPDATE_USER, async (updateUser) => {
    try {
      const userInstance = await User.findByPk(updateUser[0]);
      if (!userInstance) {
        return next(createError(404, 'User not found!!!'));
      }

      const attrs = ['nameUser', 'idCard', 'nameRoom'];
      const values = _.pick(updateUser[1], attrs);

      if (values.idCard) {
        const card = await Card.findByPk(values.idCard);
        if (!card) {
          return next(createError(404, 'Card not found'));
        }
      }
      const updatedUser = await userInstance.update(values);
      if (!updatedUser) {
        return next(createError(404, 'User not updated'));
      }
      io.emit(WEBSOCKET_EVENTS.NEW_USER, updatedUser);
    } catch (error) {
      socket.emit(WEBSOCKET_EVENTS.ERR_USER, error);
    }
  });
  socket.on('disconnect', (reason) => {
    console.log(reason);
  });
});

server.listen(port, () => {
  console.log('server started at port = ', port);
});
