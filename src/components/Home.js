import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeStyle.css';


function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=32e5f6ec&s=${searchQuery}`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.log('Error fetching movies:', error);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSearch}>
        <input
          className="input"
          type="text"
          placeholder="Search movies"
          value={searchQuery}
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li className="movie-list-item" key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
