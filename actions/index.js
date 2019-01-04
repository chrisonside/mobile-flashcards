export const INITIALISE_DECK_DATA = 'INITIALISE_DECK_DATA';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
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

export function addCard (card) {
  return {
    type: ADD_CARD,
    card,
  }
}

export function setCurrentDeck (deckKey) {
  return {
    type: SET_CURRENT_DECK,
    deckKey,
  }
}