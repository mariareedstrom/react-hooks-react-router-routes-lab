import React from "react";

function renderLi(movie) {
  return <li key={movie}>{movie}</li>;
}

function Actor({ name, movies }) {
  return (
    <div>
      <h5>Name: {name}</h5>

      <ul>
        Movies:
        {movies.map(renderLi)}
      </ul>
    </div>
  );
}

export default Actor;
