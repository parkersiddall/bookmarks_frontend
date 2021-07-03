import React from 'react'
import { useDispatch } from 'react-redux'

// reducers
import { setCategory } from '../reducers/categoryReducer'

// components
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import FavoriteButton from './FavoriteButton'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Link from '@material-ui/core/Link'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

const BookmarkCard = ({ bookmark }) => {

    const dispatch = useDispatch()

    return (
        <div>
            <Card>
                <CardActionArea component='a' href={bookmark.url} target='_blank'>
                    <CardMedia
                        style={{height: '150px'}}
                        image={bookmark.redditPost.url}
                        title={bookmark.redditPost.title}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography variant='h6'>
                        {bookmark.name}
                    </Typography>
                    <Typography variant='subtitle1'>
                        <Link 
                            underline="none"
                            component="button"
                            color="primary"
                            onClick={() => dispatch(setCategory(bookmark.category))}
                            variant='inherit'>
                            {bookmark.category}
                        </Link>
                    </Typography>
                </CardContent>
                <CardActions 
                    disableSpacing
                >
                    <Tooltip title="Show notes">
                        <IconButton 
                            aria-label="Info">
                            <KeyboardArrowDownIcon
                                fontSize="small"
                            />
                        </IconButton>
                    </Tooltip>
                    <IconButton 
                        style={{marginLeft: 'auto'}}
                        aria-label="Info">
                        <MoreVertIcon
                            fontSize='small'
                        />
                    </IconButton>
                    <Tooltip title={bookmark.redditPost.title}>
                        <IconButton 
                            aria-label="Info">
                            <InfoIcon
                                fontSize="small"
                            />
                        </IconButton>
                    </Tooltip>
                    <FavoriteButton 
                        bookmark={bookmark}
                    />
                </CardActions>
            </Card>
        </div>
    )
}

export default BookmarkCard