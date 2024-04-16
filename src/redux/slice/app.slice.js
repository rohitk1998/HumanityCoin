import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isConnected : false , 
    account : '',
    configureAddress : {
      _swapTrigger: '',
    _purchaseTax: '',
    _salesTax: '',
    },
    isOnline : false 
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
    },
    setConfiguredAddress: (state, action) => {
      state.configureAddress = action.payload;
    },
    setIsOnline: (state, action) => {
      state.isOnline = action.payload;
    }
  },
});

export const {
  setIsConnected,
  setAccount,
  setConfiguredAddress,
  setIsOnline
} = appSlice.actions;
export default appSlice.reducer;
