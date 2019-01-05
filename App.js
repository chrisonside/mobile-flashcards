import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import reducer from './reducers';
import { INITIALISE_DECK_DATA } from './actions';
import { Tabs } from './config/routing';
import { saveDeckListToAsyncStorage } from './utils/api';
import { setUpLocalNotification } from './utils/notifications';
import CustomStatusBar from './components/CustomStatusBar';
import { black } from './utils/colors';

/*
  * This function returns a middleware which replaces the deck data stored in AsyncStorage on user's mobile device
  * I have added a blacklist functionality, where I can specify any dispatched actions where I do not want the middleware to run.
  * This aims to make the app a little more efficient.
  * For example upon the home screen's initial load, I retrieve deck data from asyncStorage and add it to my Redux store, and it makes no sense in this case to immediately update AsyncStorage, hence the blacklist.
*/
const asyncDeckStorage = (action_blacklist = []) => {
  /* If action is on blacklist, just dispatch the action to the Redux store */
  return store => next => action => {
    if (action_blacklist.includes(action.type)) {
      return next(action);
    }
    /* If action not on blacklist, dispatch redux action to the store, and then save decks data to AsyncStorage */
    const result = next(action);
    const { decks } = store.getState();
    saveDeckListToAsyncStorage(decks);
    return result;
  };
}

export default class App extends Component {
  componentDidMount(){
    setUpLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(
        reducer,
        applyMiddleware(asyncDeckStorage([INITIALISE_DECK_DATA]))
        )}>
        <View style={{ flex: 1 }}>
          <CustomStatusBar bgColor={black} barStyle='light-content'></CustomStatusBar>
          <Tabs />
        </View>
      </Provider>
    )
  }
}