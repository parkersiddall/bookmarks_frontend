import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import bookmarksReducer from './reducers/bookmarksReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    bookmarks: bookmarksReducer
  })
  
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )
  
export default store