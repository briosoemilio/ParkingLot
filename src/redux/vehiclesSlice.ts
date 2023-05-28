import {createSlice} from '@reduxjs/toolkit';
import {ParkingSlot} from '../shared/interface';
import {parkVehicle} from './parkingLotSlice';

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
    parkedVehicles: [] as ParkingSlot[],
  },
  reducers: {
    addVehicle: (state, action) => {
      state.parkedVehicles = [...state.parkedVehicles, action.payload];
    },
    removeVehicle: (state, action) => {
      state.parkedVehicles = state.parkedVehicles.filter(parkVehicle => {
        return parkVehicle.vehicle !== action.payload.vehicle;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {addVehicle, removeVehicle} = vehiclesSlice.actions;

export const vehiclesReducer = vehiclesSlice.reducer;
