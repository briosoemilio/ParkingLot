import React, {useMemo} from 'react';
import {View, StyleSheet, Image} from 'react-native';

// Redux
import {getParkingLot} from '../redux/reduxStates';

// Shared
import {Images} from '../shared';

const ParkingLotComponent = () => {
  const entryPoints = getParkingLot().entryPoints;
  const parkingLotImage = useMemo(() => {
    if (entryPoints === 3) {
      return Images.parkingLot3;
    } else if (entryPoints === 4) {
      return Images.parkingLot4;
    }
  }, [entryPoints]);

  return (
    <View style={styles.container}>
      <Image
        source={parkingLotImage}
        style={styles.parkingLot}
        resizeMode="contain"
      />
    </View>
  );
};

export default ParkingLotComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parkingLot: {
    width: '100%',
    height: '100%',
  },
});
