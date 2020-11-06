import UUID from 'uuid-js';
import { constants } from '../actions/markers';
const initialState = [];

export default ( state = initialState, action ) => {
    if (action.type === 'CREATE_MARKER'){
        const newMarker = {
            coordinate: action.coordinate,
            title: action.title,
            description: action.description,
            image: action.image,
        }
        return [...state, newMarker];
    }
    return state;
}