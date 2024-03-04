import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createRoom, deleteRooms, getAllRooms, sendRoom } from '../api';
import { pendingReducer, rejectReducer } from './helpers';

const ROOMS_SLICE_NAME = 'rooms';

export const getRooms = createAsyncThunk(
  `${ROOMS_SLICE_NAME}/getRooms`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await getAllRooms(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getRoomByName = createAsyncThunk(
  `${ROOMS_SLICE_NAME}/getRoomByName`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await sendRoom(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addRoom = createAsyncThunk(
  `${ROOMS_SLICE_NAME}/addRoom`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await createRoom(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const delRooms = createAsyncThunk(
  `${ROOMS_SLICE_NAME}/delRooms`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await deleteRooms(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const roomsSlice = createSlice({
  name: ROOMS_SLICE_NAME,
  initialState: {
    rooms: [],
    error: null,
    isFetching: false,
    room: null,
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
      state.room = action.payload;
    });
    builder.addCase(addRoom.rejected, rejectReducer);
    builder.addCase(getRoomByName.pending, pendingReducer);
    builder.addCase(getRoomByName.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.room = action.payload;
    });
    builder.addCase(getRoomByName.rejected, rejectReducer);
    builder.addCase(delRooms.pending, pendingReducer);
    builder.addCase(delRooms.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.room = action.payload;
    });
    builder.addCase(delRooms.rejected, rejectReducer);
  },
});

export default roomsSlice.reducer;
