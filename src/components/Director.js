import React from "react";

function renderLi(movie) {
  return <li key={movie}>{movie}</li>;
}

function Director({ name, movies }) {
  return (
    <div>
      <h4>Name: {name}</h4>
      <ul>Movies: {movies.map(renderLi)}</ul>
    </div>
  );
}

export default Director;
