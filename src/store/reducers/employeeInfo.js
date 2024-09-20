import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "../../service/UserService";

export const fetchEmployeesInfo = createAsyncThunk(
  "employees/fetchEmployeesInfo",
  async (token, thunkAPI) => {
    try {
      const response = await UserService.getUsers(token);
      return response.colaboradoresList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async ({employeeId, token}, thunkAPI) => {
    try{
      const response = await UserService.deleteUser(employeeId, token);
      return response
    }catch(error){
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)
const employeeSlice = createSlice({
    name: "employees",
    initialState:{
        employeeInfo: [],
        status: 'idle',
        error: null
    },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeesInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployeesInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employeeInfo = action.payload;
      })
      .addCase(fetchEmployeesInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteEmployee.pending, (state) => {
        state.status = "deleting";
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.status = "deleteSucceeded";
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.status = "deleteFailed";
        state.error = action.payload;
      });
  },
})
export default employeeSlice.reducer;
