import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ScoreCard from './components/ScoreCard';
import Pagination from './components/Pagination';
import StyledButton from './components/StyledButton';
import { black, white } from '../utils/helpers';

export default class Quiz extends Component {
  render() {

    const currentQuestion = {
      title: 'What is my name',
      answer: 'blah',
      questionNumber: 1,
    }

    return (
      <View>
        <View>
          <Pagination page={currentQuestion.questionNumber}></Pagination>
          <Text>{currentQuestion.title}</Text>
          <Text>Show answer</Text>
          <StyledButton onPress={console.log('Correct pressed')}>Correct</StyledButton>
          <StyledButton onPress={console.log('Incorrect pressed')}>Incorrect</StyledButton>
        </View>
        <View>
          <Pagination page={currentQuestion.questionNumber}></Pagination>
          <Text>{currentQuestion.answer}</Text>
          <Text>Show question</Text>
          <StyledButton onPress={console.log('Correct pressed')}>Correct</StyledButton>
          <StyledButton onPress={console.log('Incorrect pressed')}>Incorrect</StyledButton>
        </View>
        <ScoreCard score={2} total={4}></ScoreCard>
      </View>
    )
  }
}
