import {createSlice} from '@reduxjs/toolkit';
import {largeSlots, mediumSlots, smallSlots} from '../data/parkingSlot';

export const parkingLotSlice = createSlice({
  name: 'parkingLot',
  initialState: {
    entryPoints: null,
    vacantSlots: {
      small: 20,
      medium: 20,
      large: 20,
    },
    occupiedSlots: [] as string[],
  },
  reducers: {
    setEntryPoints: (state, action) => {
      state.entryPoints = action.payload;
    },
    parkVehicle: (state, action) => {
      const {slot} = action.payload;
      state.occupiedSlots = [...state.occupiedSlots, slot];

      if (smallSlots.includes(slot)) {
        --state.vacantSlots.small;
      } else if (mediumSlots.includes(slot)) {
        --state.vacantSlots.medium;
      } else if (largeSlots.includes(slot)) {
        --state.vacantSlots.large;
      }
    },
    unparkVehicle: (state, action) => {
      const {slot} = action.payload;
      state.occupiedSlots = state.occupiedSlots.filter(occupiedSlot => {
        return occupiedSlot !== slot;
      });

      if (smallSlots.includes(slot)) {
        ++state.vacantSlots.small;
      } else if (mediumSlots.includes(slot)) {
        ++state.vacantSlots.medium;
      } else if (largeSlots.includes(slot)) {
        ++state.vacantSlots.large;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {setEntryPoints, parkVehicle, unparkVehicle} =
  parkingLotSlice.actions;

export const parkingLotReducer = parkingLotSlice.reducer;
