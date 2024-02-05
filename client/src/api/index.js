import axios from 'axios';

const httpClient = axios.create({
  baseURL: `http://${process.env.REACT_APP_API_HOST || 'localhost:3000'}/api`,
});
 
export const createUser = (values) => httpClient.post('/users', values);
export const sendUsersInRoom = (values) => httpClient.patch('/users', values);
export const getAllUsers = () => httpClient.get('/users');
export const updateUser = ([id, values]) =>
  httpClient.patch(`/users/${id}`, values);
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
