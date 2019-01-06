# Mobile Flashcards app

# Overview

Mobile Flashcards is a React Native app where a user can create flashcards and then take quizzes to test their knowledge. A user can create and store flashcards in custom decks (categories) and then elect to take a quiz where they run through all the flashcards in a deck and receive a final score for how many they got right.

I built this React Native app as part of my coursework for Udacity's [React Developer NanoDegree](https://eu.udacity.com/course/react-nanodegree--nd019) course.

# Which platforms have been tested so far

I've tested the app on Android by using the Expo app on my personal Android phone.

## Tech stack used

This project has been bootstrapped with [Create React Native App](https://yarnpkg.com/en/package/create-react-native-app).

It uses the [Expo](https://expo.io/) toolchain which allows you to build native Android and iOS apps using JavaScript and React. I'm using Expo's Notifications and Permissions APIs to help set up my local notifications.

I use the [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage) library from the React Native framework for storing the app's deck data on the user's mobile device - that way the user's previous flashcards will be present whenever they use the app, unless they clear the app's storage in their device's settings.

Whilst I am retrieving previous deck data using the AsyncStorage library, I am managing the app's state using [Redux](https://redux.js.org/introduction/getting-started). I have created a custom middleware which updates the deck data stored in AsyncStorage after certain Redux actions are dispatched.

I am using [React Navigation](https://reactnavigation.org/docs/en/getting-started.html) to manage the tab and stack navigation.

When it comes to styling, I am using CSS in JS via [React Native's StyleSheet API](https://facebook.github.io/react-native/docs/stylesheet). I also use [React Native's Platform API](https://facebook.github.io/react-native/docs/platform-specific-code) to detect whether a user is on an iOS or Android device so I can serve up different styles accordingly.

# To get the project up and running

* `git clone git@github.com:chrisonside/mobile-flashcards.git`
* `cd mobile-flashcards`
* `yarn install`
* `yarn start`

# Next steps

These are my next steps for the app:

* Get the iOS simulator up and running on my Mac and then test my app on iOS too.
* Add validation to prevent decks with the same name being added.
* Add functionality for user to delete decks and cards.
* Whilst I've disabled submit buttons until required inputs have been filled, it'd be good to add disabled styles to those submit buttons, or alternatively add error messages to guide the user better.
* When you add lots and lots of decks to the list, the very end of the FlatList is cut off - this is a known issue, https://github.com/facebook/react-native/issues/15707, so it'd be good to investigate it further and see if I can find a fix.