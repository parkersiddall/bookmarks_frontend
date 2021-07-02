import React from 'react';
import { useSelector } from 'react-redux'

// components
import BookmarkCard from '../components/BookmarkCard'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const SearchResults = () => {

  const bookmarks = useSelector(store => store.bookmarks)
  const searchTerm = useSelector(store => store.search)

  let filtered

  if(searchTerm.length === 0){
    return null
  } else {
    filtered = bookmarks.filter(bookmark => bookmark.name.toLowerCase().includes(searchTerm.toLowerCase()))
    console.log(filtered)
  }

  return(
    <div>
      <Container>
          <Box m={2}>
            <Typography variant={'h6'}>
              Search Results
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
        </Container>
    </div>
  )
}

export default SearchResults