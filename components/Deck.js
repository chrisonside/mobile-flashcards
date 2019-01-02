import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StyledButton from './components/StyledButton';
import { black, white } from '../utils/helpers';

export default class Deck extends Component {
  render() {

    const demoDeck = {
      title: 'ReactDeck',
      cards: 4,
    }

    return (
      <View>
        <Text>{demoDeck.title}</Text>
        <Text>{demoDeck.cards} cards</Text>
        <StyledButton onPress={console.log('add card pressed')}>Add Card</StyledButton>
        <StyledButton onPress={console.log('start quiz pressed')}>Start Quiz</StyledButton>
      </View>
    )
  }
}
