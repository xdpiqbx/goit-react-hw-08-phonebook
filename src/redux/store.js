import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducerContacts from './reducers'

const store = configureStore({
    reducer: {
        contacts: reducerContacts
    },
    middleware: [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV === 'development'
});

export default store;
