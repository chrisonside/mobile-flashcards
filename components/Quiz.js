import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import ScoreCard from './ScoreCard';
import Pagination from './Pagination';
import StyledButton from './StyledButton';
import { clearLocalNotification, setUpLocalNotification } from '../utils/notifications';
import { blue, green, red } from '../utils/colors';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionNum: 1,
      correctAnswers: 0,
      showQuestion: true,
    }
  }

  updateScreen = (screen) => {
    this.props.navigation.navigate(screen);
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

    if(totalQuestions === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Sorry, you need to add cards to this deck before you can take a quiz 😃</Text>
          <StyledButton style={{ backgroundColor: green, marginBottom: 20 }} onPress={() => {this.updateScreen('Deck')}}>Return to deck</StyledButton>
        </View>
      )
    }

    // Display scorecard if all cards in deck answered
    // Note that I pass navigation as prop so that the functional component ScoreCard can access it
    if (currentQuestionNum > totalQuestions) {
      // As user has completed a quiz today, cancel today's notification and set up the next one for tomorrow
      clearLocalNotification()
        .then(setUpLocalNotification);
      return (
        <View style={styles.container}>
          <ScoreCard navigation={this.props.navigation} score={correctAnswers} total={totalQuestions}></ScoreCard>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Pagination currentNum={currentQuestionNum} total={totalQuestions}></Pagination>
        {(showQuestion) && (
          <View style={{flex: 1}}>
            <Text style={styles.statement}>{currentCard.question}</Text>
            <Text style={styles.subtitle} onPress={this.flipCard}>Show answer</Text>
            <StyledButton style={{ backgroundColor: green, marginBottom: 20 }} onPress={this.handleCorrectAnswer}>Correct</StyledButton>
            <StyledButton style={{ backgroundColor: red, marginBottom: 20 }} onPress={this.handleIncorrectAnswer}>Incorrect</StyledButton>
          </View>
        )}
        {(!showQuestion) && (
          <View style={{flex: 1}}>
            <Text style={styles.statement}>{currentCard.answer}</Text>
            <Text style={styles.subtitle} onPress={this.flipCard}>Show question</Text>
            <StyledButton style={{ backgroundColor: green, marginBottom: 20 }} onPress={this.handleCorrectAnswer}>Correct</StyledButton>
            <StyledButton style={{ backgroundColor: red, marginBottom: 20 }} onPress={this.handleIncorrectAnswer}>Incorrect</StyledButton>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
  },
  statement:  {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 19,
    marginBottom: 30,
    textAlign: 'center',
    color: blue,
  },
});

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
