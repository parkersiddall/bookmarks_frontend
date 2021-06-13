import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from '../styles/BookmarkCard'

// reducers
import { setCategory } from '../reducers/categoryReducer'

// components
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import FavoriteButton from './FavoriteButton'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

const BookmarkCard = ({ bookmark }) => {

    const classes = useStyles()
    const categorization = useSelector(state => state.colorCategorization)
    const dispatch = useDispatch()

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
                    <Tooltip 
                        title={bookmark.category}
                        style={{marginLeft: 'auto'}}
                        className={classes.categoryIcon}
                    >
                        <IconButton 
                            aria-label="Category"
                            onClick={() => dispatch(setCategory(bookmark.category))}
                        >
                            <BookmarkIcon style={{color: `${categorization[bookmark.category]}`}}/>
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </div>
    )
}

export default BookmarkCard