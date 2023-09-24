import { TUserLoginResponse } from "@/types/user.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TUserLoginResponse = {
    token: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
    },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;