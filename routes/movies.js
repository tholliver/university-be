import { Router } from 'express'
import { readJSON } from '../utils/custom_require.js'
export const moviesRouter = Router()

const movies = readJSON('../json_data/film.json')

moviesRouter.get('/', (req, res) => {
  console.log(req.query)
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(movie =>
      movie.Genre.includes(g => g.toLowerCase() === genre.toLowerCase())

    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})
