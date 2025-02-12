import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface TUser   {
    email:string;
    role:"admin"| "user" ;
}

type TAuthState = {
    userInfo:null| TUser;
    token:null| string;
}

const initialState:TAuthState = {
    userInfo:null,
    token:null,
}
 const loginSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser:(state,action:PayloadAction<TAuthState>)=>{
            const {userInfo, token} = action.payload
            state.userInfo = userInfo 
            state.token = token
        }
    }
})

export const {setUser} = loginSlice.actions

export default loginSlice.reducer