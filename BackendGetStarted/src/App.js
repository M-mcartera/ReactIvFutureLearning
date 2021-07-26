import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  async function fetchMoiveHandler() {
    setisLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
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
    setisLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoiveHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && results.length > 0 &&  <MoviesList movies={results} />}
        {!isLoading && results.length === 0 &&  <p>Found no movies</p>}
        {isLoading && <p>Loading</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
