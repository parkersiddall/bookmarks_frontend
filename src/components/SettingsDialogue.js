import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkSubreddit } from '../utils/subredditChecker'

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
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

const SettingsDialogue = () => {
  const dispatch = useDispatch()

  // get state from redux
  const openStatus = useSelector(state => state.settings)
  const user = useSelector(state => state.user)

  // local state for theme selector
  const [theme, setTheme] = React.useState(user.prefersDark);

  const handleChange = (event) => {
    setTheme(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const subreddit = document.getElementById('edit_subreddit').value

    // run a browser side check to be sure subreddit is valid
    try {
      const subredditApproved = await checkSubreddit(subreddit)
      console.log(subredditApproved)
  
      if (subredditApproved) {
        const updatedSettings = {
          subreddit: subreddit,
          prefersDark: theme
        }
        
        dispatch(toggleSettingsMenu())
        await dispatch(updateUserSettings(updatedSettings))
        await dispatch(initializeBookmarks())
  
      } else {
        window.alert("Subreddit does not contain enough photos. Please choose another.")
      }
    } catch (error) {
      window.alert("Subreddit not found. Please choose another.")
    }
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
              <FormControl 
                margin="normal" 
                variant="outlined" 
                fullWidth
              >
                <InputLabel id="theme">Theme</InputLabel>
                <Select
                  id="theme_selector"
                  defaultValue={user.prefersDark ? "Light" : "Dark"}
                  labelId="theme"
                  label="Theme"
                  
                  value={theme}
                  onChange={handleChange}
                >
                  <MenuItem value={false}>Light</MenuItem>
                  <MenuItem value={true}>Dark</MenuItem>
                </Select>
              </FormControl>
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