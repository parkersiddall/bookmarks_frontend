// this reducer manages the processes of creating/saving a list of unique categories from the bookmark list

export const initializeCategorization = (bookmarks) => {
  return async dispatch => {
    // create a set to prevent duplicate values
    let categories = new Set()

    // pull out categories from bookmarks, place them in set
      bookmarks.forEach(bookmark => {
      categories.add(bookmark.category)
    })

    // turn set to an array
    categories = Array.from(categories)

    dispatch({
      type: 'INIT_CATEGORIZATION',
      data: categories
    })
  }
}

export const clearCategorization = () => {
  return async dispatch => {
    dispatch({
      type: 'CLEAR_CATEGORIZATION',
      data: []
    })
  }
}

const categorization = (state = [], action) => {
  switch (action.type) { 

  case 'INIT_CATEGORIZATION':
    return action.data

  case 'CLEAR_CATEGORIZATION':
    return action.data

  default:
    return state
  }
}

export default categorization