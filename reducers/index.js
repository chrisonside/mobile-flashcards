import {
  INITIALISE_DECK_DATA,
  ADD_DECK,
  ADD_CARD,
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