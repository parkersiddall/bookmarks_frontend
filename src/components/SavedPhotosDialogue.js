import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// reducers
import { toggleSavedPhotos } from '../reducers/savedPhotosReducer'

// components
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid'

const SavedBookmarksDialogue = () => {
  const dispatch = useDispatch()

  // get state from redux
  const openStatus = useSelector(state => state.savedPhotosDialogueStatus)
  const user = useSelector(state => state.user)


  return (
    <div >
      <Dialog open={openStatus} onClose={() => dispatch(toggleSavedPhotos())} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Saved Bookmarks</DialogTitle>
        <Container>
          <Grid container spacing={2}>
              {user.savedPhotos.map(photo => 
                <Grid key={photo.url} item xs={12}>
                  <Box style={{border: '1px solid black'}}
                  >
                  {photo.name || 'no name'}
                  </Box>
                </Grid>
              )}
          </Grid>
        </Container>
         
      </Dialog>
    </div>
  )
}

export default SavedBookmarksDialogue