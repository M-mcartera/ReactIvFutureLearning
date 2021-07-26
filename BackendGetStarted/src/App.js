import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoiveHandler = useCallback(async () => {
    setisLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://test-1d005-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        return loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].realeaseDate,
        });
      }

      setResults(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setisLoading(false);
  }, []);

  useEffect(() => {
    fetchMoiveHandler();
  }, [fetchMoiveHandler]);

  const addMovieHandler = async (movie) => {
    const response = await fetch(
      "https://test-1d005-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
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
