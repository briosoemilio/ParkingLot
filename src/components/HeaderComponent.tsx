import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

// Navigation
import {Navigation} from '../navigation/NavigatorServices';

// Shared
import {Colors} from '../shared';

interface HeaderComponentProps {
  label: string;
}

const HeaderComponent = (props: HeaderComponentProps) => {
  const {label} = props;
  return (
    <View style={styles.headerComponentContainer}>
      <TouchableOpacity
        onPress={() => Navigation.goBack()}
        style={styles.iconContainer}>
        <Icon name="arrow-left" size={15} style={{color: Colors.teal}} />
        <Text style={{marginLeft: 10, color: Colors.teal}}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerComponentContainer: {
    position: 'absolute',
    top: -40,
    left: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
