import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import StyledButton from './StyledButton';
import { black, white } from '../utils/helpers';

export default function ScoreCard ({ navigation, score, total }) {

  return (
    <View>
      <View>
        <Text>You got {score} correct!</Text>
        <StyledButton onPress={() => {navigation.navigate('Quiz')}}>Start quiz again</StyledButton>
        <StyledButton onPress={() => {navigation.navigate('Deck')}}>Back to deck</StyledButton>
      </View>
    </View>
  )
}