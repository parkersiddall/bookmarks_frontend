// reducer that manages the status of the dialogue modal with
// the confirmation to delete a bookmark

const initialState = {
  openStatus: false,
  bookmark: {
    name: 'x'
  }
}


export const openConfirmDelete = (bookmark) => {
  return async dispatch => {
    dispatch({
      type: "SWITCH_CONFIRM_DELETE_STATUS",
      data: {
        openStatus: true,
        bookmark: bookmark
      }
    })
  }
}

export const closeConfirmDelete = () => {
  return async dispatch => {
    dispatch({
      type: "SWITCH_CONFIRM_DELETE_STATUS",
      data: initialState
    })
  }
}

const confirmDeleteReducer = (state = initialState, action) => {
    switch (action.type) {  

      case "SWITCH_CONFIRM_DELETE_STATUS":
        return action.data

      default:
        return state
    }
  }
  
export default confirmDeleteReducer