import { combineReducers } from 'redux'
import feeds from './feeds'

export default combineReducers({
  feeds
})

export const getFeeds = (state) => {
  return state.feeds.feeds
}
