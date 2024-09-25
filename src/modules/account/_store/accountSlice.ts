import { createSlice } from '@reduxjs/toolkit';

import { AccountInitialState } from '../_types';

const initialState: AccountInitialState = {
  isAdmin: true,
  isAuth: true,
  error: null,
  isLoading: false,
};

export const accountSlice = createSlice({
  name: 'accountStore',
  initialState,
  reducers: {
    fetchAuthenticatedUserDetails: (state) => {
      state.isLoading = true;
    },
  },
});

export const { fetchAuthenticatedUserDetails } = accountSlice.actions;

export default accountSlice.reducer;
