import 'dotenv/config.js'
import express, { json } from 'express'
import { corsMiddleware } from './cors.js'
import {
  careerLevelRouter,
  careerRouter,
  courseRouter,
  studentRouter,
  careerEnrollmentRouter
} from './routes/index.js'
// import pg from 'pg'

export const app = express()
app.disable('x-powered-by')

app.use(json())

app.use(corsMiddleware())

app.use('/careerlevel', careerLevelRouter)
app.use('/career', careerRouter)
app.use('/course', courseRouter)
app.use('/student', studentRouter)
app.use('/career-enrollment', careerEnrollmentRouter)

const PORT = process.env.PORT ?? 8080

app.listen(PORT, () => {
  console.log('Listening on:', `http://localhost:${PORT}`)
})
