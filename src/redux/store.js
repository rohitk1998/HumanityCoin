import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSlice from './slice/app.slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const reducers = combineReducers({
  app: appSlice,
});

const appReducer = (state, action) => {
  if (action.type === 'disconnected') {
    state = undefined
  } else {
    return reducers(state, action);
  }
};

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const getState = () => store.getState();

export const persister = persistStore(store);
