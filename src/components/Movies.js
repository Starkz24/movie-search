import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MoviesStyle.css';

function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(
                    `http://www.omdbapi.com/?apikey=32e5f6ec&i=${id}`
                );
                setMovie(response.data);
            } catch (error) {
                console.log('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div className="container">Loading...</div>;
    }

    return (
        <div>
            <h2 className="movie-title">{movie.Title}</h2>
            <img className="movie-image" src={movie.Poster} alt={movie.Title} />
            <p className="movie-details">{movie.Plot}</p>
            <p className="movie-details">Director: {movie.Director}</p>
            <p className="movie-details">Genre: {movie.Genre}</p>
            <p className="movie-details">Year: {movie.Year}</p>
        </div>
    );
}

export default MovieDetails;
