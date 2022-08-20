import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IInitial {
  loading: boolean;
}

const initialState: IInitial = {
  loading: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setLoading: (store, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      store.loading = action.payload;
    },
  },
});

export const { setLoading } = mainSlice.actions;

export const main = (state: RootState) => state.app;

export default mainSlice.reducer;
