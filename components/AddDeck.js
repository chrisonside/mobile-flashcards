import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { addDeck, setCurrentDeck } from '../actions';
import StyledButton from './StyledButton';
import { black, white } from '../utils/colors';

class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }

  handleSubmit = () =>  {
    const deckKey = this.state.inputText;
    const deckData = {
      title: deckKey,
      questions: [],
    }

    // Update Redux store (middleware in App.js handles AsyncStorage update)
    this.props.dispatch(addDeck(deckKey, deckData));
    this.props.dispatch(setCurrentDeck(deckKey));

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
        />
        <StyledButton onPress={this.handleSubmit}>Submit</StyledButton>
      </View>
    )
  }
}

export default connect()(AddDeck);
