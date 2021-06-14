import React from 'react';
import { useSelector } from 'react-redux'
import useStyles from '../styles/Bookmarks'

// components
import BookmarkCard from '../components/BookmarkCard'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const Bookmarks = () => {

  const classes = useStyles()
  const bookmarks = useSelector(store => store.bookmarks)
  const category = useSelector(store => store.category)

  // filter bookmarks based on category
  const filtered = category === 'All' ? bookmarks : bookmarks.filter(bookmark => bookmark.category === category)

  return(
    <div>
      <Container className={classes.adjustedTopMargin}>
        <Box m={2}>
          <Typography variant={'h6'}>
            {category}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {filtered.map(bookmark => 
            <Grid key={bookmark.name} item xs={12} sm={4} md={3}>
              <BookmarkCard
                bookmark={bookmark}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  )
}

export default Bookmarks