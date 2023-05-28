import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// Components
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ButtonProps {
  label: string;
  onPress: any;
  style: any;
  color: string;
  disabled?: boolean;
}

const ButtonComponent = (props: ButtonProps) => {
  const {label, onPress, style, color, disabled = false} = props;
  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
      <Text style={{color}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
