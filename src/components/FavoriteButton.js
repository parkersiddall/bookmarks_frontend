import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../reducers/favoritesReducer'

// components
import IconButton from '@material-ui/core/IconButton'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import Tooltip from '@material-ui/core/Tooltip'

const FavoriteButton = ({ bookmark }) => {

  const dispatch = useDispatch()
  const favorites =  useSelector(state => state.favorites)
  let favUrls = favorites.map((fav) => fav._id)

  // actions
  const handleAddFavorite = () => {
    dispatch(addFavorite(bookmark))
  }

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(bookmark))
  }

  if(favUrls.includes(bookmark._id)){
    return (
      <div>
        <Tooltip title="Unpin">
          <IconButton
            aria-label="remove favorite"
            onClick={handleRemoveFavorite}
          >
            <StarIcon 
              color='primary'
              fontSize='small'
            />
          </IconButton>
        </Tooltip>
      </div>
    )
  }

  return (
    <div>
      <Tooltip title="Pin to top">
        <IconButton 
          aria-label="add favorite"
          onClick={handleAddFavorite}
        >
          <StarBorderIcon
            fontSize='small'
          />
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default FavoriteButton