import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import reducer from './reducers';
import { Tabs } from './config/routing';
import CustomStatusBar from './components/CustomStatusBar';
// import { createLocalNotification } from './utils/helpers';
import { blue, white } from './utils/colors';

export default class App extends Component {
  componentDidMount(){
    // todo - createLocalNotification
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          {/* <CustomStatusBar bgColor={blue} barStyle='light-content'></CustomStatusBar>
          <Text>Hi there</Text> */}
          <Tabs />
        </View>
      </Provider>
    )
  }
}