import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { useState } from 'react'
import { Container } from '@material-ui/core'
import QuestionCard from '../components/QuestionCard'

export default function Homepage() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/ask-api/question")
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, [])

  return (
    <Container>      

      <Grid container spacing={3}>
      {questions.map(question => (
        <Grid item key={question.user_id} xs={12} md={6} lg={4}>
         <QuestionCard  question={question}/>
        </Grid>
      ))}
      </Grid>

    </Container>
  )
}
