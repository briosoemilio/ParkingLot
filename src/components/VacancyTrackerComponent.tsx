import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Redux
import {getParkingLot} from '../redux/reduxStates';

// Shared
import {Colors} from '../shared';

const VacancyTrackerComponent = () => {
  const vacantSlots = getParkingLot().vacantSlots;
  const {small, medium, large} = vacantSlots;
  return (
    <>
      <Text style={styles.headerTextStyle}>Vacant Slots</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.regularTextStyle}>Small: {small}</Text>
        <Text style={styles.regularTextStyle}>Medium: {medium}</Text>
        <Text style={styles.regularTextStyle}>Large: {large}</Text>
      </View>
    </>
  );
};

export default VacancyTrackerComponent;

const styles = StyleSheet.create({
  headerTextStyle: {fontSize: 35, color: Colors.teal},
  regularTextStyle: {fontSize: 14, color: Colors.teal, marginRight: 20},
});
