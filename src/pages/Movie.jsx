import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { FaTheaterMasks } from "react-icons/fa";
import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;
const BGURL = import.meta.env.VITE_BG;

export default function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    };

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };



    useEffect(() => {
        const movieURL = `${moviesURL}${id}?${apiKey}`;
        getMovie(movieURL);
    }, []);

    
    return (

            
        <div className="movie-page">
        
            {movie && (
                <>
                <img src={BGURL + movie.backdrop_path} alt="" srcset=""  className="bg"/>
                <div className='movie-container'>
                    <h2 className='movie-title'>{movie.title}</h2>
                    <div className='info-movie'>
                        <div>
                            <img src={imageUrl + movie.poster_path} alt={movie.title} />
                            <p className="tagline">{movie.tagline}</p>
                        </div>
                        <div className="text-info">
                            <div className="info">
                                <h3>
                                    <BsWallet2 /> Budget: {formatCurrency(movie.budget)}
                                </h3>
                            </div>
                            <div className="info">
                                <h3>
                                    <BsGraphUp /> Revenue: {formatCurrency(movie.revenue)}
                                </h3>
                            </div>
                            <div className="info">
                                <h3>
                                    <BsHourglassSplit/> Duration: {movie.runtime} minutes
                                </h3>
                            </div>
                            <div className="info">
                                <h3>
                                    <FaTheaterMasks /> Genres: {movie.genres.map(genre => genre.name).join(", ")}
                                </h3>
                            </div>
                            <div className="info description">
                                <h3>
                                    <BsFillFileEarmarkTextFill /> Overview:
                                </h3>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}
                </div>
               
            );
            
}

console.log(Movie.backdrop_path)

