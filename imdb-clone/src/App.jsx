import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Card from "./components/card/Card";
import Movielist from "./components/movieList/Movielist";

function App() {
  // const [MovieData, setMovieData] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=54699a3732d3f2d123ceb782e03a0319"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json.results);
  //       setMovieData(json.results);
  //     });
  //   // .then((data) => setMovieData(data.page));
  //   // setMovieData(data1.results[1]);
  //   // console.log(data1);
  // }, []);

  return (
    <>
      <h2 className="App">
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route
              path="movie/:id"
              element={<h1>Movie detail page</h1>}
            ></Route>
            <Route path="movies/:type" element={<Movielist />}></Route>
            <Route path="/*" element={<h1>Error page</h1>}></Route>
          </Routes>
        </Router>
      </h2>
    </>
  );
}

export default App;
