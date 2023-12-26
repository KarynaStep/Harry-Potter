import { createSlice } from '@reduxjs/toolkit';
import { createRoom, getAllRooms, getRoom } from '../api';
import { pendingReducer, rejectReducer, decorateAsyncThunk } from './helpers';

const ROOMS_SLICE_NAME = 'rooms';

export const getRooms = decorateAsyncThunk({
  type: `${ROOMS_SLICE_NAME}/getRooms`,
  thunk: getAllRooms,
});

export const getRoomByName = decorateAsyncThunk({
  type: `${ROOMS_SLICE_NAME}/getRoomByName`,
  thunk: getRoom,
});

export const addRoom = decorateAsyncThunk({
  type: `${ROOMS_SLICE_NAME}/addRoom`,
  thunk: createRoom,
});


const roomsSlice = createSlice({
  name: ROOMS_SLICE_NAME,
  initialState: {
    rooms: [],
    error: null,
    isFetching: false,
    roomAuth: null,
    foundRoom: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRooms.pending, pendingReducer);
    builder.addCase(getRooms.fulfilled, (state, action) => {
      state.isFetching = false;
      state.rooms = action.payload;
      state.error = null;
    });
    builder.addCase(getRooms.rejected, rejectReducer);
    builder.addCase(addRoom.pending, pendingReducer);
    builder.addCase(addRoom.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.roomAuth = action.payload;
    });
    builder.addCase(addRoom.rejected, rejectReducer);
    builder.addCase(getRoomByName.pending, pendingReducer);
    builder.addCase(getRoomByName.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.foundRoom = action.payload;
    });
    builder.addCase(getRoomByName.rejected, rejectReducer);
  },
});

export default roomsSlice.reducer;
