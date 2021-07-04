import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// reducers
import { toggleSettingsMenu } from '../reducers/settingsReducer'
import { updateUserSettings } from '../reducers/userReducer'
import { initializeBookmarks } from '../reducers/bookmarksReducer'

// components
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'

const SettingsDialogue = () => {
  const dispatch = useDispatch()

  // get state from redux
  const openStatus = useSelector(state => state.settings)
  const user = useSelector(state => state.user)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const subreddit = document.getElementById('edit_subreddit').value

    // run a browser side check to be sure subreddit is valid

    const updatedSettings = {
      subreddit: subreddit,
    }
    
    dispatch(toggleSettingsMenu())
    await dispatch(updateUserSettings(updatedSettings))
    await dispatch(initializeBookmarks())
  }

  return (
    <div>
      <Dialog open={openStatus} onClose={() => dispatch(toggleSettingsMenu())} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Settings</DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <DialogContentText>
                Logged in as <b>{user.username}</b>
              </DialogContentText>
              <TextField
                defaultValue={user.subreddit}
                id="edit_subreddit"
                label="Subreddit"
                type="text"
                margin="normal"
                variant="outlined"
                required
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start">r/</InputAdornment>,
                }}
              />
              <FormHelperText id="standard-weight-helper-text">Subreddits with plenty of pictures work best.</FormHelperText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => dispatch(toggleSettingsMenu())} 
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

export default SettingsDialogue