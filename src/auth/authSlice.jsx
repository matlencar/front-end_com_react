import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login as LoginService } from "../service/apiService";
import { loginReqres as loginService } from '../service/strapiApiService';

const tokenFromStorage = localStorage.getItem('token');

import axios from 'axios';

const API_URL = 'https://reqres.in/api/login';

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, { email, password });
      return response.data;
    } catch (error) {
      console.error("Erro no login:", error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data?.error || 'Erro desconhecido');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: tokenFromStorage || null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload?.token || null;
        if (state.token) {
          localStorage.setItem('token', state.token);
        } else {
          state.error = 'Token não recebido';
        }
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;