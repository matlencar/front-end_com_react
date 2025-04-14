import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login as LoginService } from "../service/apiService";
import { loginStrapi as loginService } from '../service/strapiApiService';

const tokenFromStorage = localStorage.getItem('token');

/*export const loginAsync = createAsyncThunk(
    'auth/login',
    async ({email, password }, thunkAPI) => {
        try {
            const response = await LoginService({ email, password });
            return response.data;
        }catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }

    }
)*/
export const loginAsync = createAsyncThunk(
    'auth/login',
    async ({ email, password }, thunkAPI) => {
      try {
        const data = await loginService({ identifier:email, password });
        if (data.error) {
          return thunkAPI.rejectWithValue(data.error);
        }
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
    }
  );

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: tokenFromStorage ? tokenFromStorage : null,
        status:'idle',
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginAsync.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(loginAsync.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.token = action.payload?.jwt || null;
            
            if(state.token) {
                localStorage.setItem('token', state.token);
            }else{
                state.error = "Token não recebido";
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