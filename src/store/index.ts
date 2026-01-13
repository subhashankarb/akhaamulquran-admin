import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import themeReducer from './themeSlice'; // Ensure this matches your file name (themeSlice or themesSlice)
import authReducer from './authSlice';

// 1. Combine your reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

// 2. Configure Persistence
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'theme'], // Only persist these slices
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 3. Create Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 4. Export Persistor and Types
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;