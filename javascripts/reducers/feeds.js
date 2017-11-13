import * as types from '../constants'

const initialState = {
  feeds: []
}

const feeds = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FEEDS:
      return { ...state, feeds: actions.feeds}
    default:
      return state
  }
}

export default feeds
