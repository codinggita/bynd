import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contracts: JSON.parse(localStorage.getItem('syncContracts')) || [],
  conflicts: JSON.parse(localStorage.getItem('conflicts')) || [],
  pendingEntities: JSON.parse(localStorage.getItem('pendingEntities')) || [],
  lastSync: null,
};

const syncSlice = createSlice({
  name: 'sync',
  initialState,
  reducers: {
    setContracts: (state, action) => {
      state.contracts = action.payload;
      localStorage.setItem('syncContracts', JSON.stringify(action.payload));
    },
    setConflicts: (state, action) => {
      state.conflicts = action.payload;
      localStorage.setItem('conflicts', JSON.stringify(action.payload));
    },
    setPendingEntities: (state, action) => {
      state.pendingEntities = action.payload;
      localStorage.setItem('pendingEntities', JSON.stringify(action.payload));
    },
    addContract: (state, action) => {
      state.contracts.unshift(action.payload);
      localStorage.setItem('syncContracts', JSON.stringify(state.contracts));
    },
    resolveConflict: (state, action) => {
      state.conflicts = state.conflicts.filter(c => c.id !== action.payload);
      localStorage.setItem('conflicts', JSON.stringify(state.conflicts));
    },
    updateLastSync: (state) => {
      state.lastSync = new Date().toISOString();
    }
  },
});

export const { 
  setContracts, 
  setConflicts, 
  setPendingEntities, 
  addContract, 
  resolveConflict, 
  updateLastSync 
} = syncSlice.actions;

export default syncSlice.reducer;
