// reducer that manages the status of the dialogue modal with
// the form to add a bookmark
export const openAddBookmark = () => {
  return async dispatch => {
    dispatch({
      type: "SWITCH_ADD_BOOKMARK_STATUS",
      data: true
    })
  }
}

export const closeAddBookmark = () => {
  return async dispatch => {
    dispatch({
      type: "SWITCH_ADD_BOOKMARK_STATUS",
      data: false
    })
  }
}

const addBookmarkReducer = (state = false, action) => {
    switch (action.type) {  

      case "SWITCH_ADD_BOOKMARK_STATUS":
        return action.data

      default:
        return state
    }
  }
  
export default addBookmarkReducer