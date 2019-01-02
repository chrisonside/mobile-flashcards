import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StyledButton from './StyledButton';
import { black, white } from '../utils/helpers';

export default class AddDeck extends Component {
  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <Text>Form input goes here - need correct tag</Text>
        <StyledButton onPress={console.log('Submit pressed')}>Submit</StyledButton>
      </View>
    )
  }
}
