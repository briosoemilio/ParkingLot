import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // You can also define a whitelist or blacklist to specify which reducers to persist or exclude.
  // whitelist: ['reducer1', 'reducer2'], // Persist only these reducers
  // blacklist: ['reducer3'], // Exclude these reducers from persisting
};

export default persistConfig;
