import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './Authentication/authenticationSlice'
import userReducer from './User/userSlice'

export const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        user: userReducer
    },
})