import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { addDeck, setCurrentDeck } from '../actions';
import StyledButton from './StyledButton';
import { black, white } from '../utils/colors';

class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
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

  render() {
    const shouldSubmitBeDisabled = !this.state.inputText;
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          placeholder='Deck title'
          onChangeText={(inputText) => this.setState({inputText})}
        />
        <TouchableOpacity
          onPress={this.handleSubmit}
          disabled={shouldSubmitBeDisabled}>
            <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddDeck);
