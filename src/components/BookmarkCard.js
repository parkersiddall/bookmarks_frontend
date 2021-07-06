import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

// reducers
import { setCategory } from '../reducers/categoryReducer'
import { openConfirmDelete } from '../reducers/confirmDeleteReducer'
import { openEditBookmark } from '../reducers/editBookmarkReducer'
import { addOrRemoveSavedPhoto } from '../reducers/userReducer'

// components
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import FavoriteButton from './FavoriteButton'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Link from '@material-ui/core/Link'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  }))

const BookmarkCard = ({ bookmark }) => {

    const classes = useStyles()
    const dispatch = useDispatch()

    // pull from redux
    const user = useSelector(state => state.user)

    // local state to manage collapse and menu
    const [expanded, setExpanded] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)

    // handlers for collapse and menu
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // handle save/unsave photo
    const handleSave = async () => {
        const photo = {
            url: bookmark.redditPost.url,
            name: bookmark.redditPost.title
        }

        try {
            dispatch(addOrRemoveSavedPhoto(photo))
         
        } catch (error){
            console.log(error)
            window.alert('Error saving or unsaving this post.')
        }
    }

    // render text inside the save photo button
    const dynamicSaveButtonText = () => {
        if (user.savedPhotos === undefined){
            console.log('no savedPhotos')
            return 'Save Photo'
        }
        const photoUrls = user.savedPhotos.map((photo) => photo.url)
        if (photoUrls.includes(bookmark.redditPost.url)) {
            return 'Unsave Photo'
        } else {
            return 'Save Photo'
        }
    }

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
                    <Typography variant='subtitle2'
                    gutterBottom
                    >
                        
                        <Link 
                            underline="none"
                            component="button"
                            color="primary"
                            onClick={() => dispatch(setCategory(bookmark.category))}
                            variant='inherit'>
                            {bookmark.category}
                        </Link>
                    </Typography>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Typography variant='body2'>
                            {bookmark.notes}
                        </Typography>
                    </Collapse>
                </CardContent>
                <CardActions 
                    disableSpacing
                >
                    { bookmark.notes && 
                        <Tooltip title="Show notes">
                            <IconButton 
                                onClick={handleExpandClick}
                                aria-label="Notes"
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                  })}
                            >
                                <KeyboardArrowDownIcon
                                    fontSize="small"
                                />
                            </IconButton>
                        </Tooltip>
                    }
                    <IconButton 
                        onClick={handleClick}
                        style={{marginLeft: 'auto'}}
                        aria-label="Menu">
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
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => dispatch(openEditBookmark(bookmark))}>Edit Bookmark</MenuItem>
                <MenuItem onClick={() => dispatch(openConfirmDelete(bookmark))} color="secondary">Delete Bookmark</MenuItem>
                <Divider />
                <MenuItem onClick={() => handleSave()}>{dynamicSaveButtonText()}</MenuItem>
            </Menu>

        </div>
    )
}

export default BookmarkCard