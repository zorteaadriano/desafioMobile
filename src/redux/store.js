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

const reposSlice = createSlice({
  name: 'repos',
  initialState: null,
  reducers: {
    setRepos: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const { setRepos } = reposSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    repos: reposSlice.reducer,
  },
  middleware: [thunk],
});

export default store;
