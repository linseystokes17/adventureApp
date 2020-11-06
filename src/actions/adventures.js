import Constants from './constants'

export const constants = new Constants({
  CREATE_ADVENTURE: 'CREATE_ADVENTURE',
  GET_ADVENTURES: 'GET_ADVENTURES',
  DELETE_ADVENTURE: 'DELETE_ADVENTURE',
})

export const createAdventure = (title, images, distance) => ({
  type: constants.get("CREATE_ADVENTURE"),
  payload: {
    title,
    images,
    distance
  }
});

export const getAdventures = () => ({
  type: constants.get('GET_ADVENTURES'),
})

export const deleteAdventure = (id) => ({
  type: constants.get('DELETE_ADVENTURE'),
  id
})

