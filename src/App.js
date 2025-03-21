import { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import WatchList from "./components/WatchList";
import "./App.css";
import "./styles.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header />

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>}></Route>
            <Route path="/watchlist" element={<WatchList movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>}></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
