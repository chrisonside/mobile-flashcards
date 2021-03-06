export const INITIALISE_DECK_DATA = 'INITIALISE_DECK_DATA';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const ADD_CARD_TO_CURRENT_DECK = 'ADD_CARD_TO_CURRENT_DECK';
export const SET_CURRENT_DECK = 'SET_CURRENT_DECK';

export function initaliseDeckData (deckData) {
  return {
    type: INITIALISE_DECK_DATA,
    deckData,
  }
}

export function addDeck (deckKey, deckData) {
  return {
    type: ADD_DECK,
    deckKey,
    deckData,
  }
}

export function addCard (currentDeckKey, cardData) {
  return {
    type: ADD_CARD,
    currentDeckKey,
    cardData,
  }
}

export function addCardToCurrentDeck (currentDeckKey, cardData) {
  return {
    type: ADD_CARD_TO_CURRENT_DECK,
    currentDeckKey,
    cardData,
  }
}

export function setCurrentDeck (deckKey) {
  return {
    type: SET_CURRENT_DECK,
    deckKey,
  }
}