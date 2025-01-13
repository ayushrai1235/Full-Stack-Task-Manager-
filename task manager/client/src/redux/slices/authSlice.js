import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,

    isSidebarOpen: false,
 
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state, action) => {
            localStorage.setItem("userInfo", JSON.stringify(action.payload))
            state.user = action.payload
        },
        logout: (state) => {
            localStorage.removeItem("userInfo")
            state.user = null
        },
        toggleSidebar: (state) => {
            state.isSidebarOpen = action.payload
        }
    }
});

export const {login, logout, toggleSidebar} = authSlice.actions

export default authSlice.reducer