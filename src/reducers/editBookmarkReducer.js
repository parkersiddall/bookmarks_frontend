// reducer that manages the status of the dialogue modal with
// the edit bookmark form

const initialState = {
  openStatus: false,
  bookmark: {
    name: 'x'
  }
}


export const openEditBookmark = (bookmark) => {
  return async dispatch => {
    dispatch({
      type: "SWITCH_EDIT_BOOKMARK_STATUS",
      data: {
        openStatus: true,
        bookmark: bookmark
      }
    })
  }
}

export const closeEditBookmark = () => {
  return async dispatch => {
    dispatch({
      type: "SWITCH_EDIT_BOOKMARK_STATUS",
      data: initialState
    })
  }
}

const editBookmarkReducer = (state = initialState, action) => {
    switch (action.type) {  

      case "SWITCH_EDIT_BOOKMARK_STATUS":
        return action.data

      default:
        return state
    }
  }
  
export default editBookmarkReducer