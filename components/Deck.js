import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StyledButton from './StyledButton';
import { black, white } from '../utils/helpers';

export default class Deck extends Component {

  updateScreen = (screen) => {
    // Switch stack
    this.props.navigation.navigate(screen);
    // todo - Redux setCurrentDeck
  }

  render() {

    const demoDeck = {
      title: 'ReactDeck',
      cards: 4,
    }

    return (
      <View>
        <Text>{demoDeck.title}</Text>
        <Text>{demoDeck.cards} cards</Text>
        <StyledButton onPress={() => {this.updateScreen('AddQuizCard')}}>Add Card</StyledButton>
        <StyledButton onPress={() => {this.updateScreen('Quiz')}}>StartQuiz</StyledButton>
      </View>
    )
  }
}
