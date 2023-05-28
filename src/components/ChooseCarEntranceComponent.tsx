import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Navigation
import {Navigation} from '../navigation/NavigatorServices';

// Redux
import {getParkingLot} from '../redux/reduxStates';

// Shared
import {Colors} from '../shared';
import {Screen} from '../shared/screens';

// Components
import RBSheet from 'react-native-raw-bottom-sheet';
import ButtonComponent from './ButtonComponent';

interface ChooseCarEntranceComponentProps {
  reference: any;
}

const ChooseCarEntranceComponent = (props: ChooseCarEntranceComponentProps) => {
  const entryPoints = getParkingLot().entryPoints;
  const [entryPoint, setEntryPoint] = useState('NE');
  const {reference} = props;

  const onPressProceed = () => {
    Navigation.navigate(Screen.PARK_VEHICLE_SCREEN, {entryPoint});
    reference.current.close();
  };
  return (
    <RBSheet
      ref={reference}
      height={300}
      openDuration={250}
      customStyles={{
        container: {
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: Colors.darkTeal,
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
        },
      }}>
      <View>
        <Text style={{fontSize: 14, color: Colors.teal, alignSelf: 'center'}}>
          Please select entry point:
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginRight: 20}}>
            <ButtonComponent
              label="North East"
              style={[
                styles.buttonStyles,
                entryPoint === 'NE'
                  ? {...styles.buttonStyleSelected}
                  : {...styles.buttonStyleUnselected},
              ]}
              color={Colors.teal}
              onPress={() => setEntryPoint('NE')}
            />
            {entryPoints === 4 ? (
              <ButtonComponent
                label="South East"
                style={[
                  styles.buttonStyles,
                  entryPoint === 'SE'
                    ? {...styles.buttonStyleSelected}
                    : {...styles.buttonStyleUnselected},
                ]}
                color={Colors.teal}
                onPress={() => setEntryPoint('SE')}
              />
            ) : null}
          </View>
          <View style={{marginLeft: 20}}>
            <ButtonComponent
              label="North West"
              style={[
                styles.buttonStyles,
                entryPoint === 'NW'
                  ? {...styles.buttonStyleSelected}
                  : {...styles.buttonStyleUnselected},
              ]}
              color={Colors.teal}
              onPress={() => setEntryPoint('NW')}
            />
            <ButtonComponent
              label="South West"
              style={[
                styles.buttonStyles,
                entryPoint === 'SW'
                  ? {...styles.buttonStyleSelected}
                  : {...styles.buttonStyleUnselected},
              ]}
              color={Colors.teal}
              onPress={() => setEntryPoint('SW')}
            />
          </View>
        </View>
      </View>
      <View>
        <ButtonComponent
          label="PROCEED"
          style={[styles.fullWidthButton]}
          color={Colors.teal}
          onPress={() => onPressProceed()}
        />
      </View>
    </RBSheet>
  );
};

export default ChooseCarEntranceComponent;

const styles = StyleSheet.create({
  buttonStyles: {
    padding: 5,
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
    padding: 3,
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
