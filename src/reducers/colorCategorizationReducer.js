import colors from '../config/colors'

export const initializeColorCategorization = (bookmarks) => {

  return async dispatch => {
    // create a set to prevent duplicate values
    let categories = new Set()

    // pull out categories from bookmarks, place them in set
      bookmarks.forEach(bookmark => {
      categories.add(bookmark.category)
    })

    // create an empty list to store color coded dicts
    const categorization = {}

    // turn set to an array to iterate through it and assign colors
    categories = Array.from(categories)
    let x = 0
    categories.forEach((category) => {

      // create a dict with category, assign color based on x index
      categorization[category] = colors[x]

      x = x + 1
    })

    dispatch({
      type: 'INIT_COLOR_CATEGORIZATION',
      data: categorization
    })
  }
}

const colorCategorization = (state = null, action) => {
  switch (action.type) { 

  case 'INIT_COLOR_CATEGORIZATION':
    return action.data

  default:
    return state
  }
}

export default colorCategorization