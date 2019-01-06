import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { addDeck, setCurrentDeck } from '../actions';
import { blue, green, white } from '../utils/colors';

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

    // Finally clear input text and switch screens
    this.setState({ inputText: ''}, function() {
      this.props.navigation.navigate('Deck');
    });
  }

  render() {
    const shouldSubmitBeDisabled = !this.state.inputText;
    const { inputText } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.inputText}
          selectionColor={blue}
          placeholder='Deck title'
          onChangeText={(inputText) => this.setState({inputText})}
          value={inputText}
        />
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosSubmit : styles.AndroidSubmit}
          onPress={this.handleSubmit}
          disabled={shouldSubmitBeDisabled}>
            <Text style={styles.submitText}>Create Deck</Text>
        </TouchableOpacity>
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
    textAlign: 'center',
  },
  inputText: {
    alignSelf: 'stretch',
    height: 40,
    fontSize: 20,
    marginBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
  },
  iosSubmit: {
    height: 45,
    padding: 10,
    borderRadius: 6,
    backgroundColor: green,
    alignSelf: 'stretch',
  },
  AndroidSubmit: {
    height: 45,
    paddingTop: 10,
    paddingRight: 25,
    paddingBottom: 13,
    paddingLeft: 25,
    borderRadius: 3,
    backgroundColor: green,
    alignSelf: 'stretch',
  },
  submitText: {
    color: white,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default connect()(AddDeck);
