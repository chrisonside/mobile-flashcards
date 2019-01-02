import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import reducer from './reducers';
import CustomStatusBar from './components/CustomStatusBar';
// import { createLocalNotification } from './utils/helpers';
import { blue, white } from './utils/colors';

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