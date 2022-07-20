import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    infoUser: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setInfo: (state, actions) => {
            state.infoUser = actions.payload
        },
    },
})


export const { setInfo } = userSlice.actions

export default userSlice.reducer