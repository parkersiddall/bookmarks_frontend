import React from 'react';
import { useSelector } from 'react-redux'

// components
import BookmarkCard from '../components/BookmarkCard'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const Favorites = () => {

  const favorites = useSelector(store => store.favorites)

  if (favorites.length === 0 ){
    return null
  }

  return(
    <div>
      <Container>
          <Box m={2}>
            <Typography variant={'h6'}>
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
    </div>
  )
}

export default Favorites