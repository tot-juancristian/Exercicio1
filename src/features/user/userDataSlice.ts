import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { saveData } from '../../shared/common/saveData';
import { initialUserDataState } from '../../shared/consts/const';

// Todo seu data no const.ts é salvo aqui
export const userDataSlice = createSlice({
  name: 'userData',
  initialState: initialUserDataState,
  reducers: {
    setData: (state, action) => {
      console.log('Set userData');

      saveData('cmi.suspend_data', action);
      state.data = action.payload;
    },
  },
});

export const { setData } = userDataSlice.actions;

export const selectUserData = (state: RootState) => state.userData.data;
export default userDataSlice.reducer;
