import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// reducers
import { toggleSavedPhotos } from '../reducers/savedPhotosReducer'

// components
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import SavedPhotoCard from './SavedPhotoCard'
import { Typography } from '@material-ui/core'

const SavedBookmarksDialogue = () => {
  const dispatch = useDispatch()

  // get state from redux
  const openStatus = useSelector(state => state.savedPhotosDialogueStatus)
  const user = useSelector(state => state.user)


  return (
    <div >
      <Dialog 
        open={openStatus} onClose={() => dispatch(toggleSavedPhotos())} 
        aria-labelledby="form-dialog-title"
        fullWidth={true}
      >
        <DialogTitle id="form-dialog-title">Saved Photos</DialogTitle>
        <Container>
          {user.savedPhotos.length === 0 &&
            <Typography variant={'subtitle1'}>
              No photos have been saved yet. 
            </Typography>
          }
          <Grid container spacing={2}>
              {user.savedPhotos.map(photo => 
                <Grid key={photo.url} item xs={12}>
                  <Box>
                    <SavedPhotoCard
                      photo={photo}
                    />
                  </Box>
                </Grid>
              )}
          </Grid>
        </Container>
        <DialogActions>
          <Button
            onClick={() => dispatch(toggleSavedPhotos())} 
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SavedBookmarksDialogue