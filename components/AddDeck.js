import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import StyledButton from './StyledButton';
import { black, white } from '../utils/helpers';

export default class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }

  handleSubmit = () =>  {
    const textToSubmit = this.state.inputText;
    // todo - Add to AsyncStorage, our 'database' for this project
    // todo - Update Redux store - addDeck() and setCurrentDeck()

    // Finally switch screens
    this.props.navigation.navigate('Deck');
  }

  // todo - disable submit button unless this.state.inputText is populated
  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          placeholder='Deck title'
          onChangeText={(inputText) => this.setState({inputText})}
          onSubmitEditing={this.handleSubmit}
        />
        <StyledButton onPress={this.handleSubmit}>Submit</StyledButton>
      </View>
    )
  }
}
