import UUID from 'uuid-js';
import { constants } from '../actions/adventures';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.get('CREATE_ADVENTURE'):
      const newAdventure = {
        ...action.payload,
      }
      return [...state, newAdventure];
    case constants.get('DELETE_ADVENTURE'):
      return state.filter(adventure => adventure.id !== action.id);
    default:
      return state;
  }
  return state;
}