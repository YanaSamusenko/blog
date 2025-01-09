import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestSignUp } from "../services/auth";

const initialState = {
  userEmail: null,
  isLoading: false,
  error: null,
  isSubmit: false
}

export const fetchSignUp = createAsyncThunk('auth/fetchSignUp', async (body) => {
  const data = await requestSignUp(body)
  return data
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignUp.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchSignUp.fulfilled, (state, action) => {
        state.isLoading = false
        state.userEmail = action.payload.email,
          state.isSubmit = true
      })
      .addCase(fetchSignUp.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message;
      })
  }
})

export const authReducer = authSlice.reducer