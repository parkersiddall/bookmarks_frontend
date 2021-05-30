const bookmarks = [
    {
        name: 'Blackboard PROD',
        url: 'https://www.google.com',
        description: 'The production environment of Bocconis Blackboard learn instance.'
    },
    {
        name: 'Blackboard TEST',
        url: 'https://www.yahoo.com',
        description: 'The testing environment of Bocconis Blackboard learn instance.'
    }
]

const bookmarksReducer = (state = bookmarks, action) => {
    switch (action.type) {  
    default:
      return state
    }
  }
  
export default bookmarksReducer