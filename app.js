import express, { json } from 'express'
import { corsMiddleware } from './cors.js'
import { moviesRouter } from './routes/movies.js'
// import pg from 'pg'

const app = express()
app.disable('x-powered-by')

app.use(json())

app.use(corsMiddleware())

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 8080

app.listen(PORT, () => {
  console.log('Listening on: ', `http://localhost:${PORT}`)
})
