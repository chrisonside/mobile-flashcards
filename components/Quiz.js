import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import ScoreCard from './ScoreCard';
import Pagination from './Pagination';
import StyledButton from './StyledButton';
import { black, white } from '../utils/helpers';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionNum: 1,
      correctAnswers: 0,
      showQuestion: true,
    }
  }

  // todo - add ability to restart the quiz
  restartQuiz = () => {
  }

  flipCard = () => {
    this.setState(prevState => ({
      showQuestion: !prevState.showQuestion
    }));
  }

  handleCorrectAnswer = () => {
    this.setState(prevState => ({
      currentQuestionNum: prevState.currentQuestionNum + 1,
      correctAnswers: prevState.correctAnswers + 1,
      showQuestion: true,
    }));
  }

  handleIncorrectAnswer = () => {
    this.setState(prevState => ({
      currentQuestionNum: prevState.currentQuestionNum + 1,
      showQuestion: true,
    }));
  }

  render() {
    const { currentQuestionNum, correctAnswers, showQuestion } = this.state;
    const { currentDeckQuestions } = this.props;

    const totalQuestions = currentDeckQuestions.length;
    const currentCard = currentDeckQuestions[currentQuestionNum - 1];

    // Display scorecard if all cards in deck answered
    // I pass navigation as prop so that the functional component ScoreCard can access it
    // todo - style this properly
    if (currentQuestionNum > totalQuestions) {
      return (
        <View>
          <ScoreCard navigation={this.props.navigation} score={correctAnswers} total={totalQuestions}></ScoreCard>
        </View>
      )
    }

    return (
      <View>
        <Pagination currentNum={currentQuestionNum} total={totalQuestions}></Pagination>
        {(showQuestion) && (
          <View>
            <Text>{currentCard.question}</Text>
            <Text onPress={this.flipCard}>Show answer</Text>
            <StyledButton onPress={this.handleCorrectAnswer}>Correct</StyledButton>
            <StyledButton onPress={this.handleIncorrectAnswer}>Incorrect</StyledButton>
          </View>
        )}
        {(!showQuestion) && (
          <View>
            <Text>{currentCard.answer}</Text>
            <Text onPress={this.flipCard}>Show question</Text>
            <StyledButton onPress={this.handleCorrectAnswer}>Correct</StyledButton>
            <StyledButton onPress={this.handleIncorrectAnswer}>Incorrect</StyledButton>
          </View>
        )}
      </View>
    )
  }
}

function mapStateToProps (state) {
  const currentDeckQuestions = state.currentDeck.questions;
  return {
    currentDeckQuestions,
  }
}

export default connect(
  mapStateToProps,
  null,
)(Quiz);
