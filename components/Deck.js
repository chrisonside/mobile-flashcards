import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import StyledButton from './StyledButton';
import { black, white } from '../utils/colors';

class Deck extends Component {

  // todo - potentially put updateScreen func in helpers
  updateScreen = (screen) => {
    this.props.navigation.navigate(screen);
  }

  render() {
    const { currentDeck } = this.props;
    const cardsInDeck = currentDeck.questions.length;

    return (
      <View>
        <Text>title is {currentDeck.title}</Text>
        <Text>{cardsInDeck} cards</Text>
        <StyledButton onPress={() => {this.updateScreen('AddQuizCard')}}>Add Card</StyledButton>
        <StyledButton onPress={() => {this.updateScreen('Quiz')}}>StartQuiz</StyledButton>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentDeck: state.currentDeck || {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
