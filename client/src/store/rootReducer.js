import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import cardsReducer from './cardsSlice';
import roomsReduser from './roomsSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  rooms: roomsReduser,
  cards: cardsReducer,
});

export default rootReducer;
