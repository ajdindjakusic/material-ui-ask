import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'
import SendIcon from '@material-ui/icons/Send'
import { FormControlLabel, makeStyles } from '@material-ui/core'
import TextField from'@material-ui/core/TextField'

import { useHistory } from 'react-router'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
})

export default function Create() {

  const classes = useStyles()
  const history = useHistory()
  const [text, setText] = useState('')
  const [textError, setTextError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setTextError(false)

  
    if (text == '') {
      setTextError(true)
    }
  
    if (text) {
      fetch('http://localhost:8080/ask-api/question', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({text}) // + user_id
      }).then(() => history.push('/'))
    }
  }

  return (
    <Container>
       <Typography 
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
       >
         Ask your question
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>

         <TextField 
         onChange={(e)=>setText(e.target.value)}
          className={classes.field}
          label="Question"
          variant="outlined"
          color="secondary"
          size="large"
          multiline
          rows={4}
          fullWidth
          required
          error={textError}
        />

        <Button
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<SendIcon />}
      >
        Submit
      </Button>

      </form>

    </Container>
  )
}
