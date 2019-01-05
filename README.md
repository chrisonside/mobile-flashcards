# Mobile Flashcards app

# Overview

Mobile Flashcards is a React Native app where a user can create flashcards and then take quizzes to test their knowledge. A user can create and store flashcards in custom decks (categories) and then elect to take a quiz where they run through all the flashcards in a deck and receive a final score for how many they got right.

I built this React Native app as part of my coursework for Udacity's [React Developer NanoDegree](https://eu.udacity.com/course/react-nanodegree--nd019) course.

## Tech stack used

This project has been bootstrapped with [Create React Native App](https://yarnpkg.com/en/package/create-react-native-app).

It uses the [Expo](https://expo.io/) toolchain which allows you to build native Android and iOS apps using JavaScript and React. I'm using Expo's Notifications and Permissions APIs to help set up my local notifications.

I use the [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage) library from the React Native framework for storing the app's deck data on the user's mobile device - that way the user's previous flashcards will be present whenever they use the app, unless they clear the app's storage in their device's settings.

Whilst I am retrieving previous deck data using the AsyncStorage library, I am managing the app's state using [Redux](https://redux.js.org/introduction/getting-started). I have created a custom middleware which updates the deck data stored in AsyncStorage after certain Redux actions are dispatched.

I am using [React Navigation](https://reactnavigation.org/docs/en/getting-started.html) to manage the tab and stack navigation.

# Testing

I've developed and tested the app for Android by using the Expo app on my personal Android phone.

I've also downloaded the iOS simulator and tested my app on iOS.

# To get the project up and running

* `git clone git@github.com:chrisonside/mobile-flashcards.git`
* `cd mobile-flashcards`
* `yarn install`
* `yarn start`