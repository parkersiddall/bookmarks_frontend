import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// reducers
import { closeEditBookmark } from '../reducers/editBookmarkReducer'
//import { addBookmark } from '../reducers/bookmarksReducer'

// components
import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

const EditBookmarkDialogue = () => {
  const dispatch = useDispatch()

  // get state from redux
  // get state from redux
  const categorization = useSelector(state => state.categorization)
  const bookmark = useSelector(state => state.editBookmarkDialogue.bookmark)
  const openStatus = useSelector(state => state.editBookmarkDialogue.openStatus)

  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const adjustedBookmark = {
      name: document.getElementById('edit_name').value,
      url: document.getElementById('edit_url').value,
      category: document.getElementById('edit_category').value,
      notes: document.getElementById('edit_notes').value
    }
    //dispatch(addBookmark(adjustedBookmark))
  }

  return (
    <div>
      <Dialog open={openStatus} onClose={() => dispatch(closeEditBookmark())} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Bookmark</DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                defaultValue={bookmark.name}
                id="edit_name"
                label="Name"
                type="text"
                margin="normal"
                variant="outlined"
                autoFocus
                required
                fullWidth
              />
              <TextField
                defaultValue={bookmark.url}
                id="edit_url"
                label="URL"
                type="url"
                margin="normal"
                variant="outlined"
                required
                fullWidth
              />
              <Autocomplete
                defaultValue={bookmark.category}
                id="edit_category"
                options={categorization.map(category => category)}
                freeSolo
                renderInput={(params) => (
                  <TextField
                    {...params} 
                    label="Category"
                    margin="normal"
                    variant="outlined"
                    required
                  />
                )}
                />
                <TextField
                  id="edit_notes"
                  label="Notes"
                  type="text"
                  rows={5}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  multiline
                />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => dispatch(closeEditBookmark())} 
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSubmit} 
                type="submit"
                color="primary"
              >
                Save
              </Button>
            </DialogActions>
          </form>
      </Dialog>
    </div>
  )
}

export default EditBookmarkDialogue