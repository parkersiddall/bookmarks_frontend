import React from 'react'
import { useDispatch } from 'react-redux'

// reducers
import { addOrRemoveSavedPhoto } from '../reducers/userReducer'

// components
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const SavedPhotoCard = ({photo}) => {

  const dispatch = useDispatch()

  // handle save/unsave photo
  const handleSave = async () => {
    const savedPhoto = {
        url: photo.url,
        name: photo.title
    }

    try {
      dispatch(addOrRemoveSavedPhoto(savedPhoto))
    } catch (error){
        console.log(error)
        window.alert('Error saving or unsaving this post.')
    }
  }


  return(
    <div>
      <Card>
        < CardMedia
          style={{height: '500px'}}
          image={photo.url}
          title={photo.name}
        />
        <CardContent>
          <Typography variant={'subtitle2'}>
            {photo.name}
          </Typography>
        </CardContent>
        <CardActions >
          <Button
            onClick={() => handleSave()}
            style={{marginLeft: 'auto'}}
            size="small"
          >
            Unsave
          </Button>
          <Button
            size="small"
            color="primary"
            href={photo.url}
            target='blank'
          >
            Full Size
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default SavedPhotoCard