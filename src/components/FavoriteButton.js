import React from 'react'

// components
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import IconButton from '@material-ui/core/IconButton'

const FavoriteButton = ({ bookmark }) => {

  console.log(bookmark)
  const favorites = ['https://www.google.com'] //test for now, just to be sure the right icon is returned

  // add functions to handle clicks and save/remove favorites
  const handleAddFavorite = () => {
    alert('Pinned to favorites')
  }

  const handleRemoveFavorite = () => {
    alert('Removed from favorites')
  }

  if(favorites.includes(bookmark.url)){
    return (
      <div>
        <IconButton
          aria-label="remove favorite"
          onClick={handleRemoveFavorite}
        >
            <FavoriteIcon color='primary' />
        </IconButton>
      </div>
    )
  }

  return (
    <div>
      <IconButton 
        aria-label="add favorite"
        onClick={handleAddFavorite}
      >
          <FavoriteBorderOutlinedIcon color='primary' />
      </IconButton>
    </div>
  )
}

export default FavoriteButton