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
      tabBarVisible: false,
      headerLeft:
      <Ionicons name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                onPress={() => navigation.navigate('DeckList')}
                size={35} color="black"/>,
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
export const Tabs = TabNavigator({
  DeckList: {
    screen: ScreenStack,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) => <Ionicons name='filing' size={35} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='add' size={35} color={tintColor} />
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