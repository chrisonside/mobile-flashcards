import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { isArrayEmpty } from '../utils/helpers';
import { white, black } from '../utils/helpers';

export default class DeckList extends Component {

  updateScreenAndData = () => {
    // Switch stack
    this.props.navigation.navigate('Deck');
    // todo - Redux setCurrentDeck
  }

  render() {

    const demoData = [
      {
        title: 'Deck1',
        cards: 2
      },
      {
        title: 'Deck2',
        cards: 3
      }
    ]

    // todo - Create and style this properly
    if (isArrayEmpty(demoData)) {
      return (
        <View>
          <Text>You have no decks! Click on Add Deck to get started</Text>
        </View>
      )
    }
    // todo - Give <View key={deck.title}> a better key
    return (
      <View>
        { demoData.map((deck) => (
          <View key={deck.title}>
            <Text onPress={this.updateScreenAndData}>{deck.title}</Text>
            <Text>{deck.cards} cards</Text>
          </View>
        ))}
      </View>
    )
  }
}
