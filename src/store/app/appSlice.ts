import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { RootState } from '../store';

interface IInitial {
  loading: boolean;
  user: FirebaseAuthTypes.User | null
}

const initialState: IInitial = {
  loading: false,
  user: null,
};

export const mainSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (store, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      store.loading = action.payload;
    },
    setUser: (store, action: PayloadAction<FirebaseAuthTypes.User | null>) => {
      // eslint-disable-next-line no-param-reassign
      store.user = action.payload;
    },
  },
});

export const {
  setLoading,
  setUser,
} = mainSlice.actions;

export const app = (state: RootState) => state.app;

export default mainSlice.reducer;
