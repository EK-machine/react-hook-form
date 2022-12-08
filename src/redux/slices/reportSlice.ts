import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Report, State } from '../../types/types';

const initialState: State = {
  report: null,
};

const reportSlice = createSlice({
  name: 'active',
  initialState: initialState,
  reducers: {
    setReport: (state, action: PayloadAction<Report>) => {
      state.report = action.payload;
    },
    unsetReport: (state) => {
      state.report = initialState.report;
    },
  },
});

export const { setReport, unsetReport } = reportSlice.actions;

export default reportSlice.reducer;
