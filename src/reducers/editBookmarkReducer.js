// reducer that manages the status of the dialogue modal with
// the edit bookmark form

const initialState = {
  openStatus: false,
  bookmark: {
    name: 'x',
    url:'x',
    category: 'x',
    notes: 'x'
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
      type: "CLOSE_EDIT_BOOKMARK_STATUS",
      data: initialState
    })
  }
}

const editBookmarkReducer = (state = initialState, action) => {
    switch (action.type) {  

      case "SWITCH_EDIT_BOOKMARK_STATUS":
        return action.data

      case "CLOSE_EDIT_BOOKMARK_STATUS":
        const updatedState = {
          openStatus: false,
          bookmark: state.bookmark
        }

        return updatedState
  

      default:
        return state
    }
  }
  
export default editBookmarkReducer