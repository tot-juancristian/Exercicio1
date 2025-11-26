import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

import { saveData } from '../../shared/common/saveData';
import { initialLocationState } from '../../shared/consts/const';

export const locationSlice = createSlice({
  name: 'location',
  initialState: initialLocationState,
  reducers: {
    setLocation: (state, action) => {      
      saveData('cmi.core.lesson_location', action);
      state.location = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export const selectLocation = (state: RootState) => state.userData.data;
export default locationSlice.reducer;
