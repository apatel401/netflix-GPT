import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptToggle: false
    },
    reducers: {
        toggleGpt: (state) => {
            state.gptToggle = !state.gptToggle
        }
    }
})
export const {toggleGpt} = gptSlice.actions
export default gptSlice.reducer