const bookmarks = [
    {
      name: 'Bookmark 1',
      url: 'https://www.bookmark1.com',
      category: 'Category 1',
      description: 'Lorem epsum 1.'
    },
    {
      name: 'Bookmark 2',
      url: 'https://www.bookmark2.com',
      category: 'Category 2',
      description: 'Lorem epsum 2.'
    },
    {
      name: 'Bookmark 3',
      url: 'https://www.bookmark3.com',
      category: 'Category 3',
      description: 'Lorem epsum 3.'
    },
    {
      name: 'Bookmark 4',
      url: 'https://www.bookmark4.com',
      category: 'Category 4',
      description: 'Lorem epsum 4.'
    },
    {
      name: 'Bookmark 5',
      url: 'https://www.bookmark5.com',
      category: 'Category 5',
      description: 'Lorem epsum 5.'
    },
    {
      name: 'Bookmark 6',
      url: 'https://www.bookmark6.com',
      category: 'Category 6',
      description: 'Lorem epsum 6.'
    },
    {
      name: 'Bookmark 7',
      url: 'https://www.bookmark7.com',
      category: 'Category 7',
      description: 'Lorem epsum 7.'
    },
    {
      name: 'Bookmark 8',
      url: 'https://www.bookmark8.com',
      category: 'Category 8',
      description: 'Lorem epsum 8.'
    }
]

const bookmarksReducer = (state = bookmarks, action) => {
    switch (action.type) {  
    default:
      return state
    }
  }
  
export default bookmarksReducer