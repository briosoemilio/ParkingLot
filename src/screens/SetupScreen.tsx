import React, {useMemo, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Navigation
import {Navigation} from '../navigation/NavigatorServices';

// Redux
import {useDispatch} from 'react-redux';
import {setEntryPoints} from '../redux/parkingLotSlice';

// Shared
import {Colors, Images, Screens} from '../shared';

// Components
import ButtonComponent from '../components/ButtonComponent';

// Helpers
import {log} from '../helpers/helpers';

const SetupScreen = () => {
  const dispatch = useDispatch();
  const [parkingLotType, setParkingLotType] = useState(3);
  const parkingLotImage = useMemo(() => {
    switch (parkingLotType) {
      case 3:
        return Images.parkingLot3;
      case 4:
        return Images.parkingLot4;
      default:
        return Images.parkingLot3;
    }
  }, [parkingLotType]);

  const onInitializeParkingLotHandler = () => {
    dispatch(setEntryPoints(parkingLotType));
    // navigate to splash screen
    Navigation.reset(Screens.SPLASH_SCREEN);
  };

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={{flex: 2, marginTop: 30}}>
        <Text style={styles.textStyle}>{parkingLotType} ENTRY POINTS</Text>
        <Image
          source={parkingLotImage}
          style={styles.parkingLot}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.textStyle}>
          Please select number of parking lot entry points
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ButtonComponent
            label="Three"
            style={[
              styles.buttonStyles,
              parkingLotType === 3
                ? styles.buttonStyleSelected
                : styles.buttonStyleUnselected,
            ]}
            color={Colors.teal}
            onPress={() => setParkingLotType(3)}
          />
          <ButtonComponent
            label="Four"
            style={[
              styles.buttonStyles,
              parkingLotType === 4
                ? styles.buttonStyleSelected
                : styles.buttonStyleUnselected,
            ]}
            color={Colors.teal}
            onPress={() => setParkingLotType(4)}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'column-reverse'}}>
          <ButtonComponent
            label="INITIALIZE PARKING LOT"
            style={styles.fullWidthButton}
            color={Colors.teal}
            onPress={() => onInitializeParkingLotHandler()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SetupScreen;

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
  },
  textStyle: {fontSize: 24, color: Colors.teal, alignSelf: 'center'},
  container: {width: '100%', backgroundColor: 'red'},
  parkingLot: {
    width: '90%',
    height: '90%',
    alignSelf: 'center',
  },
  buttonStyles: {
    padding: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonStyleSelected: {
    backgroundColor: Colors.greyBlue,
  },
  buttonStyleUnselected: {
    backgroundColor: 'transparent',
    padding: 8,
    borderWidth: 2,
    borderColor: Colors.teal,
    borderStyle: 'solid',
  },
  fullWidthButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.greyBlue,
    width: '100%',
    padding: 20,
  },
});
