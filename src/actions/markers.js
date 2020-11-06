import Constants from './constants'

export const constants = new Constants({
  CREATE_MARKER: 'CREATE_MARKER',
  GET_MARKERS: 'GET_MARKERS',
  DELETE_MARKER: 'DELETE_MARKER',
})

export const createMarker = (coordinate, title, description, image) => ({
  type: constants.get("CREATE_MARKER"),
  payload: {
    coordinate,
    title,
    description,
    image,
  }
});

export const getMarkers = () => ({
  type: constants.get('GET_MARKERS'),
})

export const deleteMarker = (id) => ({
  type: constants.get('DELETE_MARKER'),
  id
})