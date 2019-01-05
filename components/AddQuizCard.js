import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { addCard, addCardToCurrentDeck } from '../actions';
import StyledButton from './StyledButton';
import { objectToArray } from '../utils/helpers';
import { black, white } from '../utils/helpers';

class AddQuizCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    };
  }

  handleSubmit = () =>  {
    const currentDeckKey = this.props.currentDeckKey;
    const cardObject = {};
    cardObject['question'] = this.state.question;
    cardObject['answer'] = this.state.answer;
    this.props.dispatch(addCard(currentDeckKey, cardObject));
    this.props.dispatch(addCardToCurrentDeck(currentDeckKey, cardObject));
    this.props.navigation.navigate('Deck');
  }

  // {
  //   question: 'What is React?',
  //   answer: 'A library for managing user interfaces'
  // }

  // handleSubmit = () =>  {
  //   const deckKey = this.state.inputText;
  //   const deckData = {
  //     title: deckKey,
  //     questions: [],
  //   }

  //   // Update Redux store (middleware in App.js handles AsyncStorage update)
  //   this.props.dispatch(addDeck(deckKey, deckData));
  //   this.props.dispatch(setCurrentDeck(deckKey));

  //   // Finally switch screens
  //   this.props.navigation.navigate('Deck');
  // }

  render() {
    return (
      <View>
        <TextInput
          placeholder='Question'
          onChangeText={(question) => this.setState({question})}
        />
        <TextInput
          placeholder='Answer'
          onChangeText={(answer) => this.setState({answer})}
        />
        <StyledButton onPress={this.handleSubmit}>Submit</StyledButton>
      </View>
    )
  }
}

function mapStateToProps (state) {
  const currentDeckKey = state.currentDeck.title;
  const deckArray = objectToArray(state.decks || {});
  return {
    currentDeckKey,
    deckArray,
  }
}

export default connect(
  mapStateToProps,
  null,
)(AddQuizCard);
