import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoiveHandler = useCallback(async () => {
    setisLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const transformmedData = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          realeaseDate: movieData.release_date,
        };
      });
      setResults(transformmedData);
    } catch (error) {
      setError(error.message);
    }
    setisLoading(false);
  }, []);

  useEffect(() => {
    fetchMoiveHandler();
  }, [fetchMoiveHandler]);
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoiveHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && results.length > 0 && <MoviesList movies={results} />}
        {!isLoading && results.length === 0 && !error && <p>Found no movies</p>}
        {isLoading && <p>Loading</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
