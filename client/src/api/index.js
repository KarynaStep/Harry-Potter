import axios from 'axios';
import io from 'socket.io-client';
import store from '../store';
import CONSTANTS from '../constants';
import { addUser, errUser, updateOneUser } from '../store/usersSlice';

const { WEBSOCKET_EVENTS, BASE_URL } = CONSTANTS;


const httpClient = axios.create({
  baseURL: `http://${process.env.REACT_APP_API_HOST || BASE_URL}/api`,
});


export const sendUsersInRoom = (values) => httpClient.patch('/users', values);
export const getAllUsers = () => httpClient.get('/users');
export const deletelUsers = () => httpClient.delete('/users');

export const createRoom = (values) => httpClient.post('/rooms', values);
export const deleteRooms = () => httpClient.delete('/rooms');
export const getAllRooms = () => httpClient.get('/rooms');
export const sendRoom = (values) => httpClient.patch('/rooms', values);

export const getCardsNotPro = () => httpClient.get('/cards');
export const getCardsPro = () => httpClient.get('/cards/pro');
export const addOneCard = (values) =>
  httpClient.post('/cards', values, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  

const socket = io(`http://${BASE_URL}`);

  export const createUser = (user) =>
    socket.emit(WEBSOCKET_EVENTS.NEW_USER, user);
  socket.on(WEBSOCKET_EVENTS.NEW_USER, (user) => {
    store.dispatch(addUser(user));
  });

  export const updateUser = (user) => socket.emit(WEBSOCKET_EVENTS.UPDATE_USER, user);
  socket.on(WEBSOCKET_EVENTS.UPDATE_USER, (user) => {
    store.dispatch(updateOneUser(user));
  });

  socket.on(WEBSOCKET_EVENTS.ERR_USER, (error) => {
    store.dispatch(errUser(error));
  });