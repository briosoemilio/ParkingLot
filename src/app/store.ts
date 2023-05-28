import {configureStore} from '@reduxjs/toolkit';
import {parkingLotReducer} from '../redux/parkingLotSlice';
import reactotron from 'reactotron-react-native';
import {vehiclesReducer} from '../redux/vehiclesSlice';

export const store = configureStore({
  reducer: {
    parkingLot: parkingLotReducer,
    vehicles: vehiclesReducer,
  },
});

reactotron.setReduxStore?.(store);
