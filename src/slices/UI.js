import { createSlice } from '@reduxjs/toolkit';

const UISlice = createSlice({
  name: 'UISlice',
  initialState: { PassToDetailsScreen: false, changeButton: false, storedid: 1001001 },
  reducers: {
    ShowScreen(state) {
      state.PassToDetailsScreen = true;
    },
    Show(state) {
      state.PassToDetailsScreen = false;
    },
    ChangeButton(state) {
      state.changeButton = !state.changeButton;
    },
    storeID(state, action) {
      const newId = action.payload;
      state.storedid = newId;
    },
  },
});
export const UIActions = UISlice.actions;
export const reducer = UISlice.reducer;
export default UISlice;
