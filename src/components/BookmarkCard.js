import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

// components
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import FavoriteButton from './FavoriteButton'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
    customCard: {
      borderLeft: '5px solid #cdcdcd',
      transition: '.2s',
      '&:hover': {
        borderLeft: '5px solid #0c5299'
      }
    }
  }))

const BookmarkCard = ({ bookmark }) => {

    const classes = useStyles()

    return (
        <div>
            <Card className={classes.customCard} square>
                <CardActionArea component='a' href={bookmark.url} target='_blank'>
                    <CardContent>
                        <Typography variant='h6'>
                            {bookmark.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <FavoriteButton 
                        bookmark={bookmark}
                    />
                    <Tooltip title={bookmark.description}>
                        <IconButton aria-label="Info">
                            <InfoIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </div>
    )
}

export default BookmarkCard