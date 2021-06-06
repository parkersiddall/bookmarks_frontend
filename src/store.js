import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import bookmarksReducer from './reducers/bookmarksReducer'
import favoritesReducer from './reducers/favoritesReducer'
import drawerReducer from './reducers/drawerReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    bookmarks: bookmarksReducer,
    favorites: favoritesReducer,
    drawer: drawerReducer
  })
  
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )
  
export default store