import { configureStore } from '@reduxjs/toolkit';
import  authSlice  from './reducers/auth';
import profileInfo from './reducers/profileInfo';
import employeeInfo from './reducers/employeeInfo';
import searchSlice from './reducers/search';

const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileInfo,
    employees: employeeInfo,
    search: searchSlice
  }
});

export default store;
