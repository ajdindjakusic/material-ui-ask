import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Avatar, Button, CardActions, IconButton, Typography, makeStyles} from '@material-ui/core'
import ThumbUp from '@material-ui/icons/ThumbUp'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles({
    avatar: {
      backgroundColor: red[500],
    },
  })

export default function QuestionCard({ question }) {

    const classes = useStyles()

    return (
        <div>
            <Card elevation={1} >
                <CardHeader 
                 avatar={
                     <Avatar className={classes.avatar}>
                         ?
                     </Avatar>
                 }
                  title={"Question " + question.question_id}
                >
                </CardHeader>
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {question.text}
                    </Typography>
                    <CardActions>
                    <Button 
                        size="small" 
                        type="submit"
                        color="primary"
                        variant="contained"
                        >
                            See question...
                    </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    )
}