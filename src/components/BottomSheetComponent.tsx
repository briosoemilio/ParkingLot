import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Components
import RBSheet from 'react-native-raw-bottom-sheet';

// Shared
import {Colors, Images} from '../shared';

interface BottomSheetComponentProps {
  children?: any;
  reference: any;
  type: 'error' | 'success';
  message: string;
  onClose?: any;
}

const BottomSheetComponent = (props: BottomSheetComponentProps) => {
  const {children, reference, type, message, onClose = null} = props;
  const imageSource = type === 'success' ? Images.success : Images.error;
  return (
    <RBSheet
      ref={reference}
      height={300}
      openDuration={250}
      customStyles={{
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.darkTeal,
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
        },
      }}
      onClose={() => onClose()}>
      <Image
        source={imageSource}
        style={{height: 150, resizeMode: 'contain'}}
      />
      <Text style={{fontSize: 24, color: Colors.teal}}>{message}</Text>
    </RBSheet>
  );
};

export default BottomSheetComponent;

const styles = StyleSheet.create({});
