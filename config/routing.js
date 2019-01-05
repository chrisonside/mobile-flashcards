import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import DeckList from '../components/DeckList';
import Deck from '../components/Deck';
import Quiz from '../components/Quiz';
import ScoreCard from '../components/ScoreCard';
import AddDeck from '../components/AddDeck';
import AddQuizCard from '../components/AddQuizCard';
import { blue, white } from '../utils/colors';

// I followed this tutorial whilst setting up my navigation - https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4
// I am nesting my app's screen stack (via StackNavigator) within my Tabs (via TabNavigator)
// todo - add dynamic page titles here
export const ScreenStack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      header: null,
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions:({navigation}) => ({
      // Using this approach to set title - https://github.com/react-navigation/react-navigation/issues/2379
      title: typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === 'undefined' ? '': navigation.state.params.title,
      tabBarVisible: false,
      headerLeft:
      <Ionicons name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                onPress={() => navigation.navigate('DeckList')}
                size={25} color="black"/>,
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      tabBarVisible: false,
    },
  },
  ScoreCard: {
    screen: ScoreCard,
    navigationOptions: {
      title: 'ScoreCard',
      tabBarVisible: false,
    },
  },
  AddQuizCard: {
    screen: AddQuizCard,
    navigationOptions: {
      title: 'Add card',
      tabBarVisible: false,
    },
  },
});

// TabNavigator returns a Component which I can render in the rest of my app
// Only adding ios icons as icons aren't included on android tabs
export const Tabs = TabNavigator({
  DeckList: {
    screen: ScreenStack,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-filing' size={35} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add' size={35} color={tintColor} />
    }
  },
}, {
  navigationOptions: {
    // Hide app header when the tabs are present
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? blue : white,
    style: {
      backgroundColor: Platform.OS === 'ios' ? white : blue,
      height: 60,
    }
  }
});