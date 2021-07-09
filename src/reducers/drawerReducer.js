export const changeDrawerStatus = (status) => {
  return async dispatch => {
    dispatch({
      type: 'CHANGE_STATUS',
      data: status
    })
  }
}

const drawerReducer = (state = true, action) => {
  switch (action.type) { 
  
  case 'CHANGE_STATUS':
    return action.data

  case 'INIT_DRAWER':
    return state // change when implemented

  default:
    return state
  }
}

export default drawerReducer