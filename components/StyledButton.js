import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { black, white } from '../utils/helpers';

// Note to self on using props.children - https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891
export default function StyledButton ({ children, onPress, style = {} }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={black}>
      <Text>{children}</Text>
    </TouchableHighlight>
  )
}