import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addOneCard, getCardsNotPro, getCardsPro } from '../api';
import { pendingReducer, rejectReducer } from './helpers';

const CARDS_SLICE_NAME = 'cards';

export const getCards = createAsyncThunk(
  `${CARDS_SLICE_NAME}/getCards`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await getCardsNotPro(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCard = createAsyncThunk(
  `${CARDS_SLICE_NAME}/addCard`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await addOneCard(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCardsAllPro = createAsyncThunk(
  `${CARDS_SLICE_NAME}/getCardsPro`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await getCardsPro(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: CARDS_SLICE_NAME,
  initialState: {
    cards: [],
    cardsPro: [],
    error: null,
    isFetching: false,
    card: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCards.pending, pendingReducer);
    builder.addCase(getCards.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.cards = action.payload;
    });
    builder.addCase(getCards.rejected, rejectReducer);
    builder.addCase(getCardsAllPro.pending, pendingReducer);
    builder.addCase(getCardsAllPro.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.cardsPro = action.payload;
    });
    builder.addCase(getCardsAllPro.rejected, rejectReducer);
    builder.addCase(addCard.pending, pendingReducer);
    builder.addCase(addCard.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.card = action.payload;
    });
    builder.addCase(addCard.rejected, rejectReducer);
  },
});

export default usersSlice.reducer;
