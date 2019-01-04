import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { getDeckListFromAsyncStorage } from '../utils/api';
import { initaliseDeckData, setCurrentDeck } from '../actions';
import { isArrayEmpty, objectToArray } from '../utils/helpers';
import { white, black } from '../utils/helpers';

class DeckList extends Component {

  componentDidMount() {
    // Retrieve any previous deck data from user's AsyncStorage on their mobile device
    getDeckListFromAsyncStorage()
    .then((deckData) => {
        // Now update my redux store with that deck data
        this.props.initaliseDeckData(deckData)
      });
  }

  updateScreenAndRedux = (deckKey) => {
    this.props.setCurrentDeck(deckKey);
    this.props.navigation.navigate('Deck');
  }

  render() {

    const { deckArray } = this.props;

    // todo - Style this properly
    if (isArrayEmpty(deckArray)) {
      return (
        <View>
          <Text>You have no decks! Click on Add Deck to get started</Text>
        </View>
      )
    }
    // todo - Give <View key={deck.title}> a better key
    return (
      <View>
        { deckArray.map((deck) => (
          <View key={deck.title}>
            <Text onPress={() => {this.updateScreenAndRedux(deck.title)}}>{deck.title}</Text>
            <Text>{deck.cards} cards</Text>
          </View>
        ))}
      </View>
    )
  }
}

function mapStateToProps (state) {
  const deckArray = objectToArray(state.decks || {});
  return {
    deckArray
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initaliseDeckData: (deckData) => dispatch(initaliseDeckData(deckData)),
    setCurrentDeck: (deckKey) => dispatch(setCurrentDeck(deckKey)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);
