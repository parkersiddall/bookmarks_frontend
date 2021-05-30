import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import bookmarksReducer from './reducers/bookmarksReducer'

const reducer = combineReducers({
    bookmarks: bookmarksReducer
  })
  
const store = createStore(
reducer,
composeWithDevTools()
)
  
export default store