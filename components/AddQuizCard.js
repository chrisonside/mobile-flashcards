import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StyledButton from './components/StyledButton';
import { black, white } from '../utils/helpers';

export default class AddQuizCard extends Component {
  render() {
    return (
      <View>
        <Text>Form input for question - need correct tag</Text>
        <Text>Form input for answer - need correct tag</Text>
        <StyledButton onPress={console.log('Submit pressed')}>Submit</StyledButton>
      </View>
    )
  }
}
