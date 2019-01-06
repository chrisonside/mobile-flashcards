import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { getDeckListFromAsyncStorage } from '../utils/api';
import { initaliseDeckData, setCurrentDeck } from '../actions';
import { isArrayEmpty, objectToArray } from '../utils/helpers';
import { black, orange } from '../utils/colors';

class DeckList extends Component {

  componentDidMount() {
    // Retrieve any previous deck data from user's AsyncStorage on their mobile device
    getDeckListFromAsyncStorage()
    .then((deckData) => {
        // Now update my redux store with that deck data
        this.props.initaliseDeckData(deckData)
      });
  }

  updateScreenAndRedux = (deckKey) => {
    this.props.setCurrentDeck(deckKey);
    this.props.navigation.navigate('Deck');
  }

  render() {
    const { deckArray } = this.props;

    if (isArrayEmpty(deckArray)) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>You have no decks yet! 😃 Click on Add Deck to get started</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={deckArray}
          renderItem={({item}) => (
            <View style={styles.deckItem}>
              <Text style={styles.deckItemText} onPress={() => {this.updateScreenAndRedux(item.title)}}>{item.title}</Text>
              <Text style={styles.smallPrint}>{item.questions.length} cards</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          // https://stackoverflow.com/questions/44545148/basic-flatlist-code-throws-warning-react-native#answer-44545938
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
  },
  list: {
    paddingTop: 40,
    paddingRight: 40,
    paddingLeft: 40,
  },
  deckItem: {
    alignItems: 'center',
    marginBottom: 30,
  },
  deckItemText: {
    fontSize: 25,
    marginBottom: 2,
    color: orange,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: orange,
  },
  smallPrint: {
    color: black,
  }
});

function mapStateToProps (state) {
  const deckArray = objectToArray(state.decks || {});
  return {
    deckArray
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initaliseDeckData: (deckData) => dispatch(initaliseDeckData(deckData)),
    setCurrentDeck: (deckKey) => dispatch(setCurrentDeck(deckKey)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);
