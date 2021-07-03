import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import bookmarksReducer from './reducers/bookmarksReducer'
import favoritesReducer from './reducers/favoritesReducer'
import drawerReducer from './reducers/drawerReducer'
import categoryReducer from './reducers/categoryReducer'
import userReducer from './reducers/userReducer'
import searchReducer from './reducers/searchReducer'
import categorizationReducer from './reducers/categorizationReducer'
import addBookmarkReducer from './reducers/addBookmarkReducer'
import confirmDeleteReducer from './reducers/confirmDeleteReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    bookmarks: bookmarksReducer,
    favorites: favoritesReducer,
    drawer: drawerReducer,
    category: categoryReducer,
    search: searchReducer,
    categorization: categorizationReducer,
    user: userReducer,
    addBookmarkDialogueStatus: addBookmarkReducer,
    confirmDelete: confirmDeleteReducer
  })
  
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )
  
export default store