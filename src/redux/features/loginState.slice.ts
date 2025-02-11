import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    loginState:"login",
}
 const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        login :(state)=>{
            state.loginState = "login" 
        },
        register:(state)=>{
            state.loginState = "register"
        }
    }
})

export const {login, register} = loginSlice.actions

export default loginSlice.reducer