import AsyncStorage from '@react-native-community/async-storage';
import { constants } from '../actions/adventures';

export default (store) => (next) => (action) => {
  const result = next(action);
  if (action.type === constants.get('GET_ADVENTURES')) {
    AsyncStorage
      .getItem('@adventures')
      .then((adventuresJson) => {
        let adventures = [];
        if (adventuresJson) {
          adventures = JSON.parse(adventuresJson);
        }
      })
      .catch(console.log);
  }
  return result;
}