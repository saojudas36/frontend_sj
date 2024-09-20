import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "../../service/UserService";

export const fetchProfileInfo = createAsyncThunk(
  "profile/fetchProfileInfo",
  async (token, thunkAPI) => {
    try {
      const response = await UserService.getYourProfile(token);
      return response.colaboradores;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const profileSlice = createSlice({
    name: 'profile',
    initialState:{
        profileInfo: {},
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProfileInfo.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchProfileInfo.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.profileInfo = action.payload;
        })
        .addCase(fetchProfileInfo.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    },
});
export default profileSlice.reducer;
