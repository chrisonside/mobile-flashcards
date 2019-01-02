import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { isArrayEmpty } from '../utils/helpers';
import { white, black } from '../utils/helpers';

export default class List extends Component {
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

  if (isArrayEmpty(demoData)) {
    return (
      <View>
        <Text>You have no decks! Click on Add Deck to get started</Text>
      </View>
    )
  }
    return (
      <View>
        { demoData.map((deck) => (
          <View>
            <Text>{deck.title}</Text>
            <Text>{deck.cards} cards</Text>
          </View>
        ))}
      </View>
    )
  }
}
