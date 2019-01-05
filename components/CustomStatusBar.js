import React from 'react';
import { StatusBar, View } from 'react-native';
import { Constants } from 'expo';

/*
  * Basing this component on this statusBar commit from Udacity course:
  * https://github.com/udacity/reactnd-UdaciFitness-complete/blob/c2e7f42c1bc64146fa4de1ec3ef24e03a37f0ad9/App.js
*/
export default function CustomStatusBar({bgColor, ...props}) {
  return (
    <View style={{ backgroundColor: bgColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={ bgColor } {...props} />
    </View>
  )
}