import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import StyledButton from './StyledButton';
import { blue, green } from '../utils/colors';

class Deck extends Component {

  // Set page title which we'll target in routing and use in the header for this page
  // Idea is from this snack - https://snack.expo.io/SklGQeYIM
  componentWillMount() {
    this.props.navigation.setParams({title: this.props.currentDeck.title});
  }

  updateScreen = (screen) => {
    this.props.navigation.navigate(screen);
  }

  render() {
    const { currentDeck } = this.props;
    const cardsInDeck = currentDeck.questions.length;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{currentDeck.title}</Text>
        <Text style={styles.subtitle}>Currently {cardsInDeck} cards in the deck</Text>
        <StyledButton style={{ backgroundColor: blue, marginBottom: 20 }} onPress={() => {this.updateScreen('AddQuizCard')}}>Add Card</StyledButton>
        <StyledButton style={{ backgroundColor: green, marginBottom: 20 }} onPress={() => {this.updateScreen('Quiz')}}>Start Quiz</StyledButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 19,
    marginBottom: 30,
  },
});

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
