import { createSlice } from '@reduxjs/toolkit';
import {createUser, deletelUsers, getAllUsers, sendUsersInRoom, updateUser } from '../api';
import { pendingReducer, rejectReducer, decorateAsyncThunk } from './helpers';

const USERS_SLICE_NAME = 'users';

export const sendUsersByRoom = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/sendUsersByRoom`,
  thunk: sendUsersInRoom
});


export const addUser = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/addUser`,
  thunk: createUser,
});

export const updateOneUser = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/updateOneUser`,
  thunk: updateUser,
});


export const getUsers = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/getUsers`,
  thunk: getAllUsers,
});

export const delUsers = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/delUsers`,
  thunk: deletelUsers,
});


const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState: {
    users: [],
    error: null,
    isFetching: false,
    userAuth: null,
  },
  reducers: {
    // addUserSocket: (state, action) => {
    //   state.error = null;
    //   state.users.push(...action.payload);
    // },
    // errUserSocket: (state, action) => {
    //   state.error = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(sendUsersByRoom.pending, pendingReducer);
    builder.addCase(sendUsersByRoom.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isFetching = false;
      state.error = null;
    });
    builder.addCase(sendUsersByRoom.rejected, rejectReducer);
    builder.addCase(addUser.pending, pendingReducer);
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.userAuth = action.payload;
    });
    builder.addCase(addUser.rejected, rejectReducer);
    builder.addCase(getUsers.pending, pendingReducer);
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isFetching = false;
      state.error = null;
    });
    builder.addCase(getUsers.rejected, rejectReducer);
    builder.addCase(updateOneUser.pending, pendingReducer);
    builder.addCase(updateOneUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.userAuth = action.payload;
    });
    builder.addCase(updateOneUser.rejected, rejectReducer);
    builder.addCase(delUsers.pending, pendingReducer);
    builder.addCase(delUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.userAuth = action.payload;
    });
    builder.addCase(delUsers.rejected, rejectReducer);
  },
});

export const { addUserSocket, errUserSocket } = usersSlice.actions;

export default usersSlice.reducer;
