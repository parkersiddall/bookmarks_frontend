import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

// components
import BookmarkCard from './components/BookmarkCard'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Navbar from './components/Navbar'

const useStyles = makeStyles(() => ({
  topMarginForNavbar: {
    marginTop: '100px'
  }
}))

function App() {
  const bookmarks = useSelector(store => store.bookmarks)
  const classes = useStyles()

  return (
    <div>
      <Navbar />
      <Container className={classes.topMarginForNavbar}>
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
