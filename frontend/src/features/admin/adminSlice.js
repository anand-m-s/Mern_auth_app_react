import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import adminService from './adminServices'



//get admin from local storage
const admin = JSON.parse(localStorage.getItem('admin'))
const initialState = {
    admin: admin || null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//Login admin
export const adminLogin = createAsyncThunk('admins/login', async (admin, thunkAPI) => {
    try {
        
        return await adminService.login(admin)
    } catch (error) {
        const message = (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//logout
export const adminLogout = createAsyncThunk('admins/logout', async () => {
    console.log('inside admin slice logout')
     await adminService.logout()
})



export const adminSlice = createSlice({
    name: 'admins',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminLogin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(adminLogin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.admin = action.payload
            })
            .addCase(adminLogin.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.admin = null
            })
            .addCase(adminLogout.fulfilled,(state)=>{
                state.admin = null
            })

    }
})


export const { reset } = adminSlice.actions
export default adminSlice.reducer
