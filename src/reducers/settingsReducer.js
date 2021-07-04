// reducer that manages the status of the dialogue modal with
// the settings menu


export const toggleSettingsMenu = (bookmark) => {
  return async dispatch => {
    dispatch({
      type: "SWITCH_SETTINGS_MENU_STATUS"
    })
  }
}

const settingsReducer = (state = false, action) => {
    switch (action.type) {  

      case "SWITCH_SETTINGS_MENU_STATUS":
        return !state
  
      default:
        return state
    }
  }
  
export default settingsReducer