import React, {useEffect, useMemo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// Navigation
import {Navigation} from '../navigation/NavigatorServices';

// Redux
import {useSelector} from 'react-redux';

// Shared
import {Colors, Images, Screens} from '../shared';

// Helpers
import {log} from '../helpers/helpers';

const SplashScreen = () => {
  // REDUX STATES
  const parkingLotEntryPoints = useSelector(
    (state: any) => state.parkingLot.entryPoints,
  );

  const initialScreen = useMemo(() => {
    if (!parkingLotEntryPoints) {
      return Screens.SETUP_STACK;
    } else {
      return Screens.MAIN_STACK;
    }
  }, [parkingLotEntryPoints]);

  useEffect(() => {
    // set time out for 3 seconds to show splash screen
    const timeout = setTimeout(() => {
      Navigation.reset(initialScreen);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.splashScreenStyle}>
      <Image
        source={
          parkingLotEntryPoints ? Images.initializing : Images.splashScreen
        }
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashScreenStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkBlue,
  },
});
