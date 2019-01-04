import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = `flashcards:reactnativeapp`;

/*
  * If no previous data in user's AsyncStorage, create empty object on AsyncStorage ready for populating
  * So an empty object or object with deck data is returned to the DeckList component
*/
function processStorageResults (results) {
  let parsedResults = JSON.parse(results);
  if (parsedResults === null) {
    parsedResults = {};
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(parsedResults))
  }
  return parsedResults;
}

/*
  * Grab previous deck data stored in user's AsyncStorage on their mobile device and return to component.
  * (DeckList, aka my app's home page, requests this data upon the app loading for the first time).
*/
export function getDeckListFromAsyncStorage() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(processStorageResults)
}

/*
  * This function is called by my middleware function
  * It replaces the deck data stored in AsyncStorage on user's mobile device
*/
export function saveDeckListToAsyncStorage(deckList) {
  return AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(deckList))
}
