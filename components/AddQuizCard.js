import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { addCard, addCardToCurrentDeck } from '../actions';
import { objectToArray } from '../utils/helpers';
import { blue, green, white } from '../utils/colors';

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

    this.setState({question: '', answer: ''}, function() {
      this.props.navigation.navigate('Deck');
    });
  }

  render() {
    const { question, answer } = this.state;
    const shouldSubmitBeDisabled = (!this.state.question || !this.state.answer);
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          selectionColor={blue}
          placeholder='Question'
          onChangeText={(question) => this.setState({question})}
          value={question}
        />
        <TextInput
          style={styles.inputText}
          selectionColor={blue}
          placeholder='Answer'
          onChangeText={(answer) => this.setState({answer})}
          value={answer}
        />
        <TouchableOpacity
          style={Platform.OS === 'ios' ? styles.iosSubmit : styles.AndroidSubmit}
          onPress={this.handleSubmit}
          disabled={shouldSubmitBeDisabled}>
            <Text style={styles.submitText}>Submit</Text>
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
    height: 40,
    fontSize: 20,
    marginBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
    alignSelf: 'stretch',
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
    padding: 10,
    paddingRight: 25,
    paddingLeft: 25,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: green,
    alignSelf: 'stretch',
  },
  submitText: {
    color: white,
    fontSize: 20,
    textAlign: 'center',
  },
});

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
