import React from 'react';
import {StyleSheet, View} from 'react-native';

// Shared
import {Colors} from '../shared';

// Components
import ButtonComponent from './ButtonComponent';

interface ButtonGroupComponentProps {
  onPressParkVehicle: any;
  onPressVehicleList: any;
}

const ButtonGroupComponent = (props: ButtonGroupComponentProps) => {
  const {onPressParkVehicle, onPressVehicleList} = props;
  return (
    <View style={{flexDirection: 'row', marginTop: 20}}>
      <ButtonComponent
        label="Park Vehicle"
        style={styles.buttonStyles}
        color={Colors.teal}
        onPress={() => onPressParkVehicle()}
      />
      <ButtonComponent
        label="Vehicle List"
        style={styles.buttonStyles}
        color={Colors.teal}
        onPress={() => onPressVehicleList()}
      />
    </View>
  );
};

export default ButtonGroupComponent;

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: Colors.greyBlue,
    padding: 10,
    marginRight: 10,
  },
});
