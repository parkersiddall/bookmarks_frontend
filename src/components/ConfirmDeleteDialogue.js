import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// reducers
import { closeConfirmDelete } from '../reducers/confirmDeleteReducer'
import { deleteBookmark } from '../reducers/bookmarksReducer'

// components
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const ConfirmDeleteDialogue = () => {
  const dispatch = useDispatch()

  // get state from redux
  const bookmark = useSelector(state => state.confirmDelete.bookmark)
  const openStatus = useSelector(state => state.confirmDelete.openStatus)

  const handleDelete = async (event) => {
    event.preventDefault()
    dispatch(deleteBookmark(bookmark))
    dispatch(closeConfirmDelete())
  }

  return (
    <div>
      <Dialog open={openStatus} onClose={() => dispatch(closeConfirmDelete())} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{bookmark.name}</DialogTitle>
          <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to perminently delete this bookmark from your collection?
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => dispatch(closeConfirmDelete())} 
            >
              Cancel
            </Button>
            <Button 
              onClick={handleDelete} 
              color="secondary">
              Delete
            </Button>
          </DialogActions>
      </Dialog>
    </div>
  )
}

export default ConfirmDeleteDialogue