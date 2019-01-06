import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { white } from '../utils/colors';

export default function StyledButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={Platform.OS === 'ios' ? [styles.iosButton, style] : [styles.androidButton, style]}>
        <Text style={{ color: white }}>{children}</Text>
    </TouchableOpacity>
  )
}

// Set up button defaults for my app
const styles = StyleSheet.create({
  iosButton: {
    height: 45,
    padding: 10,
    borderRadius: 6,
    alignSelf: 'stretch'
  },
  androidButton: {
    height: 45,
    padding: 10,
    paddingRight: 25,
    paddingLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 3,
  },
})
