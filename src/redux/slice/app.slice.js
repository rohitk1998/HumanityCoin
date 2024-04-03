import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isConnected : false , 
    account : ''
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setIsConnected: (state, action) => {
      state.isConnected = action.payload;
    },
    setAccount: (state, action) => {
      state.account = action.payload;
    }
  },
});

export const {
  setIsConnected,
  setAccount
} = appSlice.actions;
export default appSlice.reducer;
