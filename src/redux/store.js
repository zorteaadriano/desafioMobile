import { configureStore, createSlice } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: [thunk],
});

export default store;
