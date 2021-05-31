import React from 'react'
import useStyles from '../styles'

// components
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import Typography from '@material-ui/core/Typography'

const BookmarkCard = ({ bookmark }) => {

    const classes = useStyles()

    return (
        <div>
            <Card className={classes.customCard}>
                <CardActionArea component='a' href={bookmark.url} target='_blank'>
                    <CardContent>
                        <Typography variant='h6'>
                            {bookmark.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <IconButton aria-label="favorite">
                    <FavoriteIcon color='primary' />
                </IconButton>
                <IconButton aria-label="delete">
                    <InfoIcon />
                </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default BookmarkCard