import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// reducers
import { closeAddBookmark } from '../reducers/addBookmarkReducer'
import { addBookmark } from '../reducers/bookmarksReducer'

// components
import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { closeEditBookmark } from '../reducers/editBookmarkReducer'

const EditBookmarkDialogue = () => {
  const dispatch = useDispatch()

  // get state from redux
  // get state from redux
  const bookmark = useSelector(state => state.editBookmarkDialogue.bookmark)
  const openStatus = useSelector(state => state.editBookmarkDialogue.openStatus)
  const categorization = useSelector(state => state.categorization)

  // local states to manage form fields
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('')
  const [notes, setNotes] = useState('')

  const adjustedBookmark = {
    name,
    url,
    category,
    notes
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    //console.log(newBookmark)
    dispatch(addBookmark(adjustedBookmark))
    dispatch(closeAddBookmark())
  }

  return (
    <div>
      <Dialog open={openStatus} onClose={() => dispatch(closeEditBookmark())} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Bookmark</DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                value={bookmark.name}
                id="name"
                label="Name"
                type="text"
                margin="normal"
                variant="outlined"
                autoFocus
                required
                fullWidth
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                value={bookmark.url}
                id="url"
                label="URL"
                type="url"
                margin="normal"
                variant="outlined"
                required
                fullWidth
                onChange={(event) => setUrl(event.target.value)}
              />
              <Autocomplete
                value={bookmark.category}
                id="category"
                options={categorization.map(category => category)}
                freeSolo
                onChange={(event) => setCategory(event.target.innerHTML)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Category"
                    margin="normal"
                    variant="outlined"
                    required
                    onChange={(event) => setCategory(event.target.value)}
                  />
                )}
                />
                <TextField
                  value={bookmark.notes || ''}
                  id="notes"
                  label="Notes"
                  type="text"
                  rows={5}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  multiline
                  onChange={(event) => setNotes(event.target.value)}
                />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => dispatch(closeEditBookmark())} 
              >
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
      </Dialog>
    </div>
  )
}

export default EditBookmarkDialogue