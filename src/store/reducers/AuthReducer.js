import { createSlice} from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'

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
    }
})

export const { messageReset } = AuthReducer.actions
export default AuthReducer.reducer