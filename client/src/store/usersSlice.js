import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  deletelUsers,
  getAllUsers,
  sendUsersInRoom,
} from '../api';
import { pendingReducer, rejectReducer } from './helpers';

const USERS_SLICE_NAME = 'users';

export const sendUsersByRoom = createAsyncThunk(
  `${USERS_SLICE_NAME}/sendUsersByRoom`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await sendUsersInRoom(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const getUsers = createAsyncThunk(
  `${USERS_SLICE_NAME}/getUsers`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await getAllUsers(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const delUsers = createAsyncThunk(
  `${USERS_SLICE_NAME}/delUsers`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await deletelUsers();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState: {
    users: [],
    error: null,
    isFetching: false,
    userAuth: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.error = null;
      state.userAuth = action.payload;
    },
    updateOneUser: (state, action) => {
      state.error = null;
      state.userAuth = action.payload;
    },
    errUser: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendUsersByRoom.pending, pendingReducer);
    builder.addCase(sendUsersByRoom.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isFetching = false;
      state.error = null;
    });
    builder.addCase(sendUsersByRoom.rejected, rejectReducer);
    builder.addCase(getUsers.pending, pendingReducer);
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isFetching = false;
      state.error = null;
    });
    builder.addCase(getUsers.rejected, rejectReducer);
    builder.addCase(delUsers.pending, pendingReducer);
    builder.addCase(delUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.userAuth = action.payload;
    });
    builder.addCase(delUsers.rejected, rejectReducer);
  },
});
export default usersSlice.reducer;

export const { addUser, errUser, updateOneUser } = usersSlice.actions;
