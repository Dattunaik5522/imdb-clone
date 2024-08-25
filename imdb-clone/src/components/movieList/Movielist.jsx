import React, { useEffect, useState } from "react";
import "./Movielist.css";
import { useParams } from "react-router-dom";
import Card from "../card/Card";

const Movielist = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=54699a3732d3f2d123ceb782e03a0319`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(movie);
        setMovieList(data.results);
        // console.log(movie.results);
      });
  };
  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movielist;
