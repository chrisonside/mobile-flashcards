import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import reducer from './reducers';
import CustomStatusBar from './components/CustomStatusBar';
// import { createLocalNotification } from './utils/helpers';
import { white, blue } from './utils/colors';

export default class App extends Component {
  componentDidMount(){
    // todo - createLocalNotification
  }
  render() {
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1 }}>
        <CustomStatusBar bgColor={blue} barStyle='light-content'></CustomStatusBar>
      </View>
    </Provider>
  }
}