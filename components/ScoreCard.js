import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StyledButton from './StyledButton';
import { blue, green } from '../utils/colors';

export default function ScoreCard ({ navigation, score, total }) {

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>You got {score} correct!</Text>
        <StyledButton style={{ backgroundColor: green, marginBottom: 20 }} onPress={() => {navigation.navigate('Quiz')}}>Start quiz again</StyledButton>
        <StyledButton style={{ backgroundColor: blue, marginBottom: 20 }} onPress={() => {navigation.navigate('Deck')}}>Back to deck</StyledButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
  },
});