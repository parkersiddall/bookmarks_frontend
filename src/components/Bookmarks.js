import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

// reducers
import { openAddBookmark } from '../reducers/addBookmarkReducer'

// components
import AddBookmarkDialogue from './AddBookmarkDialogue'
import AddIcon from '@material-ui/icons/Add'
import BookmarkCard from '../components/BookmarkCard'
import Box from '@material-ui/core/Box'
import ConfirmDeleteDialogue from './ConfirmDeleteDialogue'
import Container from '@material-ui/core/Container'
import EditBookmarkDialogue from '../components/EditBookmarkDialogue'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  customCard: {
    borderLeft: '5px solid #cdcdcd',
    transition: '.2s',
    '&:hover': {
      borderLeft: '5px solid #0c5299'
    }
  },
  categoryIcon: {
      marginLeft: 'auto'
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
  emptyText: {
    marginTop: '40vh',
    textAlign: 'center'
  }
}))

const Bookmarks = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const bookmarks = useSelector(store => store.bookmarks)
  const category = useSelector(store => store.category)

  // filter bookmarks based on category
  const filtered = category === 'All' ? bookmarks : bookmarks.filter(bookmark => bookmark.category === category)

  if (bookmarks.length === 0) {
    return(
      <div>
        <div className={classes.emptyText}>
          <Typography variant='h6'>
            Nothing here yet!
          </Typography>
          <Typography variant='subtitle1'>
            Add some bookmarks to get started
          </Typography>
        </div>
        <Fab
          color='primary'
          size='large'
          className={classes.fab}
          onClick={() => dispatch(openAddBookmark())}
          >
            <AddIcon 
              fontSize='large'
            />
        </Fab>
        <AddBookmarkDialogue />
      </div>
    )
  }

  return(
    <div>
      <Container className={classes.adjustedMargins}>
        <Box m={2}>
          <Typography variant={'h6'}>
            {category}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {filtered.map(bookmark => 
            <Grid key={bookmark._id} item xs={12} sm={4} md={3}>
              <BookmarkCard
                bookmark={bookmark}
              />
            </Grid>
          )}
        </Grid>
        <Fab
          id='add_bookmark_fab' 
          color='primary'
          size='large'
          className={classes.fab}
          onClick={() => dispatch(openAddBookmark())}
          >
            <AddIcon
              fontSize='large'
            />
        </Fab>
        <AddBookmarkDialogue />
        <ConfirmDeleteDialogue />
        <EditBookmarkDialogue />
      </Container>
    </div>
  )
}

export default Bookmarks