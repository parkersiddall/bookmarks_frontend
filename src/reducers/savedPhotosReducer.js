// reducer that manages the status of the dialogue modal with
// the users saved bookmarks
export const toggleSavedPhotos = () => {
  return async dispatch => {
    dispatch({
      type: "SWITCH_SAVED_PHOTOS_DIALOGUE_STATUS"
    })
  }
}

const savedPhotosReducer = (state = false, action) => {
    switch (action.type) {  

      case "SWITCH_SAVED_PHOTOS_DIALOGUE_STATUS":
        return !state

      default:
        return state
    }
  }
  
export default savedPhotosReducer