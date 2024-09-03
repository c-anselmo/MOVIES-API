import { Link } from "react-router-dom"

import { FaStar } from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG

import "./Card.css"

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      {showLink && <Link to={`/movie/${movie.id}`} className="details">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
          <FaStar className="star" /> {movie.vote_average.toFixed(1)}
        </p>
      </Link>}
    </div>
  )
}

export default MovieCard
