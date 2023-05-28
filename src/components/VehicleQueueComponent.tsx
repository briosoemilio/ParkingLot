import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Shared
import {Colors} from '../shared';

interface VehicleQueueComponentProps {
  plate: string;
  parkingSlot: string;
}

const VehicleQueueComponent = (props: VehicleQueueComponentProps) => {
  const {plate = 'NFW9075', parkingSlot = 'A1'} = props;
  return (
    <View>
      <Text style={styles.textStyle}>Vehicle: {plate}</Text>
      <Text style={styles.textStyle}>Please occupy slot: {parkingSlot}</Text>
    </View>
  );
};

export default VehicleQueueComponent;

const styles = StyleSheet.create({
  textStyle: {fontSize: 20, color: Colors.teal},
});
