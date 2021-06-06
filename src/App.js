import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

// reducers
import { initializeFavorites } from './reducers/favoritesReducer'
import { initializeBookmarks } from './reducers/bookmarksReducer'

// components
import BookmarkCard from './components/BookmarkCard'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import LeftDrawer from './components/LeftDrawer'
import Grid from '@material-ui/core/Grid'
import Navbar from './components/Navbar'
import Typography from '@material-ui/core/Typography'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  topMarginForNavbar: {
    marginTop: '100px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  }
}))

function App() {
  const bookmarks = useSelector(store => store.bookmarks)
  const drawerOpen = useSelector(state => state.drawer)
  const favorites = useSelector(store => store.favorites)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeFavorites())
    dispatch(initializeBookmarks())
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Navbar />
      <LeftDrawer />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
      >
        <Container className={classes.topMarginForNavbar}>
          <Box m={2}>
            <Typography variant={'h5'}>
              Favorites
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {favorites.map(bookmark => 
              <Grid key={bookmark.name} item xs={12} sm={4} md={3}>
                <BookmarkCard
                  bookmark={bookmark}
                />
              </Grid>
            )}
          </Grid>
        </Container>
        <Container className={classes.topMarginForNavbar}>
          <Box m={2}>
            <Typography variant={'h5'}>
              All
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {bookmarks.map(bookmark => 
              <Grid key={bookmark.name} item xs={12} sm={4} md={3}>
                <BookmarkCard
                  bookmark={bookmark}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
