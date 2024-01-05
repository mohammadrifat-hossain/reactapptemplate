import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import {base_url} from '../../utils/Config'

const decodeToken = (token) =>{
    if(token){
        const userInfo = jwtDecode(token)
        const expireTime = new Date(userInfo.exp * 1000)
        if(new Date() > expireTime){
            localStorage.removeItem('userToken')
            return
        }else{
            return userInfo
        }
    }
}

export const login_user = createAsyncThunk('auth/login_user', async(info,{rejectWithValue,fulfillWithValue})=>{
    // console.log(info);
    try {
        const {data} = await axios.post(`${base_url}/login`,info)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})


const AuthReducer = createSlice({
    name:'auth',
    initialState:{
        loader:false,
        errorMessage:"",
        successMessage:"ss",
        userInfo: decodeToken(localStorage.getItem('userToken'))
    },
    reducers:{
        messageReset: (state,_) =>{
            state.errorMessage = ''
            state.successMessage = ''
        }
    },
    extraReducers:(builder) =>{
        builder
            .addCase(login_user.pending, (state,{payload})=>{
                state.loader = true
            })
            .addCase(login_user.rejected, (state,{payload})=>{
                state.loader = false
            })
            .addCase(login_user.fulfilled, (state,{payload})=>{
                state.loader = false
            })
    }
})

export const { messageReset } = AuthReducer.actions
export default AuthReducer.reducer