import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Redux
import {useDispatch} from 'react-redux';
import {getVehicles} from '../redux/reduxStates';
import {removeVehicle} from '../redux/vehiclesSlice';
import {unparkVehicle} from '../redux/parkingLotSlice';

// Shared
import {Colors, Images} from '../shared';
import {ParkingSlot} from '../shared/interface';

// Components
import HeaderComponent from '../components/HeaderComponent';
import ButtonComponent from '../components/ButtonComponent';

// Helpers
import {formatTime, getTotalFare, log} from '../helpers/helpers';

const AllVehiclesScreen = () => {
  const data = getVehicles();
  const dispatch = useDispatch();
  const removeVehicleHandler = (data: ParkingSlot) => {
    dispatch(unparkVehicle({slot: data.location}));
    dispatch(removeVehicle(data));
  };

  const renderItem = (data: ParkingSlot, index: number) => {
    const totalFare = getTotalFare(data.timeIn, data.exceedingHourRate);
    const formattedTime = formatTime(data.timeIn);
    return (
      <View style={styles.itemContainer} key={index}>
        <View
          style={{
            flex: 3,
            ...styles.centeredContainer,
            alignItems: 'flex-start',
            padding: 20,
          }}>
          <Text>Vehicle ID: {data.vehicle}</Text>
          <Text>Location: {data.location}</Text>
          <Text>Exceeding Hour Rate: {data.exceedingHourRate}</Text>
          <Text>Time Start: {formattedTime}</Text>
        </View>
        <View
          style={{
            ...styles.centeredContainer,
            ...styles.unparkButtonContainer,
          }}>
          <Text>Total: {totalFare}</Text>
          <ButtonComponent
            label="Unpark"
            style={styles.buttonStyles}
            color={Colors.teal}
            onPress={() => removeVehicleHandler(data)}
          />
        </View>
      </View>
    );
  };

  const renderEmptyComponent = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={Images.empty} />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkBlue,
      }}>
      <View style={styles.container}>
        <HeaderComponent label={'All Vehicles'} />
        <Text style={{fontSize: 30, color: Colors.teal, marginBottom: 10}}>
          All Vehicles:
        </Text>
        <FlatList
          data={data}
          renderItem={({item, index}) => renderItem(item, index)}
          ListEmptyComponent={renderEmptyComponent}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllVehiclesScreen;

const styles = StyleSheet.create({
  container: {width: '100%', height: '80%', padding: 10},
  buttonStyles: {
    backgroundColor: Colors.red,
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: Colors.greyBlue,
    borderColor: Colors.teal,
    borderWidth: 2,
    marginBottom: 10,
    height: 100,
    flexDirection: 'row',
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  unparkButtonContainer: {
    flex: 1,
    borderLeftWidth: 2,
    borderLeftColor: Colors.teal,
  },
});
