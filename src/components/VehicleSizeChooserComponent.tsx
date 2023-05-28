import React, {useMemo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// Shared
import {Colors, Images} from '../shared';

// Components
import ButtonComponent from './ButtonComponent';

interface VehicleSizeChooserComponentProps {
  vehicleSize: string;
  setVehicleSize: any;
}

const VehicleSizeChooserComponent = (
  props: VehicleSizeChooserComponentProps,
) => {
  const {vehicleSize, setVehicleSize} = props;
  const vehicleImage = useMemo(() => {
    switch (vehicleSize) {
      case 'sm':
        return Images.smallVehicle;
      case 'md':
        return Images.mediumVehicle;
      case 'lg':
        return Images.largeVehicle;
      default:
        return Images.smallVehicle;
    }
  }, [vehicleSize]);

  const renderChooseVehicleSize = () => {
    return (
      <View style={{marginBottom: 10}}>
        <Text style={{color: Colors.teal}}>Please select vehicle size:</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ButtonComponent
            label="SMALL"
            style={[
              styles.buttonStyles,
              vehicleSize === 'sm'
                ? {...styles.buttonStyleSelected}
                : {...styles.buttonStyleUnselected},
            ]}
            color={Colors.teal}
            onPress={() => setVehicleSize('sm')}
          />
          <ButtonComponent
            label="MEDIUM"
            style={[
              styles.buttonStyles,
              vehicleSize === 'md'
                ? {...styles.buttonStyleSelected}
                : {...styles.buttonStyleUnselected},
            ]}
            color={Colors.teal}
            onPress={() => setVehicleSize('md')}
          />
          <ButtonComponent
            label="LARGE"
            style={[
              styles.buttonStyles,
              vehicleSize === 'lg'
                ? {...styles.buttonStyleSelected}
                : {...styles.buttonStyleUnselected},
            ]}
            color={Colors.teal}
            onPress={() => setVehicleSize('lg')}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <Image source={vehicleImage} style={styles.vehicleImageStyle} />
      <View style={{marginBottom: 10}}>
        <Text style={{color: Colors.teal}}>Please select vehicle size:</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ButtonComponent
            label="SMALL"
            style={[
              styles.buttonStyles,
              vehicleSize === 'sm'
                ? {...styles.buttonStyleSelected}
                : {...styles.buttonStyleUnselected},
            ]}
            color={Colors.teal}
            onPress={() => setVehicleSize('sm')}
          />
          <ButtonComponent
            label="MEDIUM"
            style={[
              styles.buttonStyles,
              vehicleSize === 'md'
                ? {...styles.buttonStyleSelected}
                : {...styles.buttonStyleUnselected},
            ]}
            color={Colors.teal}
            onPress={() => setVehicleSize('md')}
          />
          <ButtonComponent
            label="LARGE"
            style={[
              styles.buttonStyles,
              vehicleSize === 'lg'
                ? {...styles.buttonStyleSelected}
                : {...styles.buttonStyleUnselected},
            ]}
            color={Colors.teal}
            onPress={() => setVehicleSize('lg')}
          />
        </View>
      </View>
    </>
  );
};

export default VehicleSizeChooserComponent;

const styles = StyleSheet.create({
  vehicleImageStyle: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
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
});
