import Constants from './constants'

export const constants = new Constants({
  CREATE_GOAL: 'CREATE_GOAL',
  GET_GOALS: 'GET_GOALS',
  DELETE_GOAL: 'DELETE_GOAL',
})

export const createGoal = (title) => ({
  type: constants.get("CREATE_GOAL"),
  payload: {
    title,
  }
});

export const getGoals = () => ({
  type: constants.get('GET_GOALS'),
})

export const deleteGoal = (id) => ({
  type: constants.get('DELETE_GOAL'),
  id
})

