import { TUserLoginResponse } from "@/types/user.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TUserLoginResponse = {
    token: localStorage.getItem('token') || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            localStorage.setItem('token', state.token);
        },
        removeToken: (state) => {
            state.token = null;
            localStorage.removeItem('token');
        },
    },
});

export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;