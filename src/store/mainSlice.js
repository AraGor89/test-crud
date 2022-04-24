import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    notifyMessage: undefined,
};

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        toggleLoading: (state, { payload }) => {
            state.loading = payload;
        },
        setNotifyMessage: (state, { payload }) => {
            state.notifyMessage = payload;
        },
    },
});

export const { toggleLoading, setNotifyMessage } = mainSlice.actions;

export default mainSlice.reducer;
