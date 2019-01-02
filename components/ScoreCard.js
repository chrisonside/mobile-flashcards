import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import StyledButton from './StyledButton';
import { black, white } from '../utils/helpers';

export default function ScoreCard ({ score, total }) {
  return (
    <View>
      <View>
        <Text>You got {score} correct!</Text>
        <StyledButton onPress={console.log('Take quiz again pressed')}>Start quiz again</StyledButton>
        <StyledButton onPress={console.log('Back to deck pressed')}>Back to deck</StyledButton>
      </View>
    </View>
  )
}