import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../reducers/favoritesReducer'

// components
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import IconButton from '@material-ui/core/IconButton'

const FavoriteButton = ({ bookmark }) => {

  const dispatch = useDispatch()
  const favorites =  useSelector(state => state.favorites)

  // actions
  const handleAddFavorite = () => {
    dispatch(addFavorite(bookmark))
  }

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(bookmark))
  }

  if(favorites.includes(bookmark)){
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