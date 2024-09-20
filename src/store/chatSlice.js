import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: JSON.parse(localStorage.getItem("messages")) || [],
    },
    reducers: {
        sendMessage: (state, action) => {
            state.messages.push(action.payload);
            localStorage.setItem("messages", JSON.stringify(state.messages));
        },
    },
});

export const { sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
