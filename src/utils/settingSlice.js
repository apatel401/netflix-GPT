/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
    name: 'setting',
    initialState: {
        language: "en"
    },
    reducers: {
        changeLang: (state, action) => {
            state.language = action.payload
        }
    }
})

export const {changeLang} = settingSlice.actions

export default settingSlice.reducer