import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import { Link } from "react-router-dom";

// import "./Home.css";
import "./Home.css";
import { Link } from "react-router-dom";
import Movielist from "../../components/movieList/Movielist";

// let imageStyle = {
//   display: "flex",
//   flexDirection: "row",
//   width: "200px", // Set width
//   height: "150px", // Set height
//   // borderRadius: "50%", // Make it round
//   border: "2px solid blue", // Add a border
// };

const Home = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=54699a3732d3f2d123ceb782e03a0319"
    )
      .then((res) => res.json())
      .then((movie) => {
        // console.log(movie);
        setPopularMovie(movie.results);
        console.log(movie.results);
      });
  }, []);

  //   {popularMovie.map((movie) => (
  //     <ul>
  //       <li key={movie.id}>
  //         {" "}
  //         {movie.id} {movie.original_title}
  //       </li>
  //       <img
  //         style={imageStyle}
  //         src={`https://image.tmdb.org/t/p/original${
  //           movie && movie.backdrop_path
  //         }`}
  //         alt="title"
  //       />
  //     </ul>
  //   ))}

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovie.map((movie, index) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt="title"
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}{" "}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star"></i>{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {" "}
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <Movielist />
      </div>
    </>
  );
};

export default Home;
