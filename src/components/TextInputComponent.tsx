import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

// Shared
import {Colors} from '../shared';

interface TextInputComponentProps {
  label: string;
  containerStyle?: any;
  labelStyle?: any;
  value: any;
  setValue: any;
  autocapitalize?: boolean;
}

const TextInputComponent = (props: TextInputComponentProps) => {
  const {
    label,
    containerStyle,
    labelStyle,
    value,
    setValue,
    autocapitalize = false,
  } = props;
  return (
    <View style={{...styles.inputContainer, ...containerStyle}}>
      <Text style={{color: Colors.teal, ...labelStyle}}>{label}</Text>
      <TextInput
        style={styles.textInputStyle}
        autoCapitalize={autocapitalize ? 'characters' : 'none'}
        value={value}
        onChangeText={(text: string) => setValue(text)}
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textInputStyle: {
    fontSize: 14,
    width: '50%',
    color: Colors.teal,
    backgroundColor: Colors.greyBlue,
    padding: 10,
    height: 40,
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: Colors.teal,
  },
});
