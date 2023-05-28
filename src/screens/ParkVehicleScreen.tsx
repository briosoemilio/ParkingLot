import React, {useMemo, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Navigation
import {Navigation} from '../navigation/NavigatorServices';

// Redux
import {useDispatch} from 'react-redux';
import {parkVehicle} from '../redux/parkingLotSlice';
import {getParkingLot} from '../redux/reduxStates';
import {addVehicle} from '../redux/vehiclesSlice';

// Shared
import {Colors, Screens} from '../shared';

// Component
import VehicleSizeChooserComponent from '../components/VehicleSizeChooserComponent';
import HeaderComponent from '../components/HeaderComponent';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';
import BottomSheetComponent from '../components/BottomSheetComponent';

// Helpers
import {
  calculateNearestSlot,
  getExceedingHourRate,
  log,
} from '../helpers/helpers';

const ParkVehicleScreen = (props: any) => {
  const dispatch = useDispatch();
  const occupiedSlots = getParkingLot().occupiedSlots;
  const entryPoint: string = props.route.params?.entryPoint;

  const [vehicleSize, setVehicleSize] = useState('sm');
  const [plate, setPlate] = useState('');

  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const bottomSheetRef: any = useRef();

  const isDisabled = useMemo(() => {
    if (!vehicleSize || plate === '') {
      return true;
    } else return false;
  }, [vehicleSize, plate]);

  const openBottomSheet = (type: string, message: string) => {
    setType(type);
    setMessage(message);
    bottomSheetRef.current.open();
  };

  const onPressParkVehicleHandler = () => {
    const nearestSlot = calculateNearestSlot(
      occupiedSlots,
      vehicleSize,
      entryPoint,
    );

    const now = new Date();

    const exceedingHourRate = getExceedingHourRate(nearestSlot?.slot);
    const vehicle = {
      vehicle: plate,
      location: nearestSlot?.slot,
      timeIn: now.getTime(),
      exceedingHourRate: exceedingHourRate,
      baseFare: 40,
    };

    if (nearestSlot) {
      openBottomSheet('success', 'You have successfully parked.');
      dispatch(parkVehicle({slot: nearestSlot?.slot}));
      dispatch(addVehicle(vehicle));
    } else {
      openBottomSheet('error', 'Sorry we are fully occupied.');
    }
  };

  const renderInputPlateNumber = () => {
    return (
      <>
        <TextInputComponent
          label="Please input plate number:"
          value={plate}
          setValue={setPlate}
          autocapitalize={true}
        />
      </>
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
        <View>
          <HeaderComponent label="Park Vehicle Screen" />

          {/* Render Size Chooser Component */}
          <VehicleSizeChooserComponent
            vehicleSize={vehicleSize}
            setVehicleSize={setVehicleSize}
          />

          {/* Render Input Plate Number */}
          {renderInputPlateNumber()}
        </View>

        {/* Park Vehicle Button */}
        <ButtonComponent
          label="PARK VEHICLE"
          style={styles.fullWidthButton}
          color={isDisabled ? Colors.darkTeal : Colors.teal}
          onPress={() => onPressParkVehicleHandler()}
          disabled={isDisabled}
        />

        <BottomSheetComponent
          reference={bottomSheetRef}
          type={type as 'success' | 'error'}
          message={message}
          onClose={() => Navigation.navigate(Screens.MAP_SCREEN)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ParkVehicleScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
    padding: 10,
    justifyContent: 'space-between',
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
    borderWidth: 2,
    borderColor: Colors.teal,
    borderStyle: 'solid',
  },
  fullWidthButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.greyBlue,
    width: '100%',
    padding: 20,
  },
});
