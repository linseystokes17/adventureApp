import UUID from 'uuid-js';
import { constants } from '../actions/goals';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.get('CREATE_GOAL'):
      const newGoal = {
        ...action.payload,
      }
      return [...state, newGoal];
    case constants.get('DELETE_GOAL'):
      return state.filter(goal => goal.id !== action.id);
    default:
      return state;
  }
  return state;
}