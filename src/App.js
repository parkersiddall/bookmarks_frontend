import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

// reducers
import { initializeFavorites } from './reducers/favoritesReducer'

// components
import BookmarkCard from './components/BookmarkCard'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Navbar from './components/Navbar'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(() => ({
  topMarginForNavbar: {
    marginTop: '100px'
  }
}))

function App() {
  const bookmarks = useSelector(store => store.bookmarks)
  const favorites = useSelector(store => store.favorites)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeFavorites())
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Navbar />
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
    </div>
  );
}

export default App;
