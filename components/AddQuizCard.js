import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import StyledButton from './StyledButton';
import { black, white } from '../utils/helpers';

export default class AddQuizCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    };
  }

  handleSubmit = () =>  {
    const question = this.state.question;
    const answer = this.state.answer;
    // todo - Add to AsyncStorage, our 'database' for this project
    // todo - Update Redux store - addCard()
    // Finally switch screens
    this.props.navigation.navigate('Deck');
  }

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
