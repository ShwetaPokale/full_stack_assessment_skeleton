import { configureStore } from '@reduxjs/toolkit';
import { api } from '../src/api'; 
import usersSlice from '../src/features/usersSlice';
import homesSlice from '../src/features/homesSlice';


const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    users: usersSlice, 
    homes: homesSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;