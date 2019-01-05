import {
  INITIALISE_DECK_DATA,
  ADD_DECK,
  ADD_CARD,
  ADD_CARD_TO_CURRENT_DECK,
  SET_CURRENT_DECK,
} from '../actions';

function deckData (state = '', action) {
  switch (action.type) {
    case INITIALISE_DECK_DATA :
      return {
        ...state,
        decks: action.deckData,
      }
    case ADD_DECK :
      return {
        ...state,
        decks: {
          ...(state.decks || {}),
          [action.deckKey]: action.deckData
        },
      }
    case ADD_CARD :
      return {
        ...state,
        decks: {
          ...(state.decks || {}),
          [action.currentDeckKey]: {
            ...(state.decks[action.currentDeckKey] || {}),
            // Add cardData object to questions array without mutation
            questions: [
              ...state.decks[action.currentDeckKey].questions, action.cardData
            ]
          },
        },
      }
    case ADD_CARD_TO_CURRENT_DECK :
      return {
        ...state,
        currentDeck: {
          ...(state.currentDeck || {}),
          questions: [
              ...state.currentDeck.questions, action.cardData
          ]
        },
      }
    case SET_CURRENT_DECK :
      return {
        ...state,
        currentDeck: state.decks[action.deckKey],
      }
    default :
      return state
  }
}

export default deckData;