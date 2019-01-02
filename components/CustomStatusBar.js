import React from 'react';
import { StatusBar } from 'react-native';
import { Constants } from 'expo';

export default function CustomStatusBar({bgColor, ...props}) {
  return (
    <View style={{ backgroundColor: bgColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={ bgColor } {...props} />
    </View>
  )
}