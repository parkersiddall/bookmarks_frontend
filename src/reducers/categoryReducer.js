// this reducer manages the selected category, causing the app to filter and show only bookmarks in this category

export const setCategory = (category) => {
  return async dispatch => {
    dispatch({
      type: 'SET_CATEGORY',
      data: category
    })
  }
}

const categoryReducer = (state = 'All', action) => {
  switch (action.type) { 

  case 'SET_CATEGORY':
    return action.data

  default:
    return state
  }
}

export default categoryReducer