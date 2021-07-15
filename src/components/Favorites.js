import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

// components
import BookmarkCard from '../components/BookmarkCard'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  adjustedMarginBottom: {
    marginBottom: '50px'
  }
}))

const Favorites = () => {

  const classes = useStyles()
  const favorites = useSelector(store => store.favorites)

  if (favorites.length === 0 ){
    return null
  }

  return(
    <div>
      <Container className={classes.adjustedMarginBottom}>
          <Box m={2}>
            <Typography variant={'h6'}>
              Pinned
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {favorites.map(bookmark => 
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

export default Favorites