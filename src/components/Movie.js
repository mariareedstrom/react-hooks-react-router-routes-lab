import React from "react";

function renderLi(genre) {
  return <li key={genre}>{genre}</li>;
}

function Movie({ movie }) {
  const { title, time, genres } = movie;

  return (
    <div>
      <h5>Name: {title}</h5>
      <p>Time: {time} </p>
      <ul>{genres.map(renderLi)}</ul>
    </div>
  );
}

export default Movie;
