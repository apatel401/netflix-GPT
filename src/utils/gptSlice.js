import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptToggle: false
    },
    reducers: {
        toggleGpt: (state, action) => {
            state = !state
        }
    }
})