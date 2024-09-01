import { configureStore } from '@reduxjs/toolkit';
import homesReducer from '../src/features/homesSlice';
import usersReducer from '../src/features/usersSlice';

const store = configureStore({
  reducer: {
    homes: homesReducer,
    users: usersReducer
  }
});

export default store;
