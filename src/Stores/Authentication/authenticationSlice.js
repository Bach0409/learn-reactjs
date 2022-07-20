import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cookie: '',
}

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setCookie: (state, actions) => {
            state.cookie = actions.payload
        },
    },
})


export const { setCookie } = authenticationSlice.actions

export default authenticationSlice.reducer