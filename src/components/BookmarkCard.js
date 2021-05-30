import React from 'react'

// components
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const BookmarkCard = ({ bookmark }) => {

    return (
        <div>
            <Card>
                <CardActionArea component='a' href={bookmark.url} target='_blank'>
                    <CardContent>
                        <Typography variant='h6'>
                            {bookmark.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default BookmarkCard