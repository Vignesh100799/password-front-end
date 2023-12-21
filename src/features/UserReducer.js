import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { config } from '../config/config';

export const registerUser = createAsyncThunk('users/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${config.userApi}/register`, userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const UserSlice = createSlice({
  name: 'users',
  initialState: {
    
},
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        
        toast.success('Registration Successfully done 😃!', {
          position: 'top-center',
        });
      })
      .addCase(registerUser.rejected, (state, action) => {
       
        console.error('Error during registration:', action.payload);
        toast.error('Error during registration. Please try again.', {
          position: 'top-center',
        });
      });
  },
});

export default UserSlice.reducer;