import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

// Navigation
import {Navigation} from '../navigation/NavigatorServices';

// Shared
import {Colors, Screens} from '../shared';

// Components
import ParkingLotComponent from '../components/ParkingLotComponent';
import VacancyTrackerComponent from '../components/VacancyTrackerComponent';
import VehicleQueueComponent from '../components/VehicleQueueComponent';
import ButtonGroupComponent from '../components/ButtonGroupComponent';
import ChooseCarEntranceComponent from '../components/ChooseCarEntranceComponent';

const MapScreen = () => {
  // For Choose Car Entrance Component
  const carEntranceComponentRef: any = useRef();
  const openCarEntranceComponent = () => {
    carEntranceComponentRef.current.open();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.sideContainer}>
        <VacancyTrackerComponent />
      </View>
      <View style={styles.mapContainer}>
        <ParkingLotComponent />
      </View>
      <View style={{...styles.sideContainer}}>
        {/* <VehicleQueueComponent plate={'NFW9075'} parkingSlot="A1" /> */}
        <ButtonGroupComponent
          onPressParkVehicle={openCarEntranceComponent}
          onPressVehicleList={() =>
            Navigation.navigate(Screens.ALL_VEHICLE_SCREEN)
          }
        />
      </View>
      <ChooseCarEntranceComponent reference={carEntranceComponentRef} />
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {width: '100%', height: '100%'},
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
  },
  mapContainer: {
    flex: 3,
  },
  sideContainer: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
