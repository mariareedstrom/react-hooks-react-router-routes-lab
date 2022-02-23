import React from "react";
import { directors } from "../data";
import Director from "./Director";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <Director
          key={director.name}
          name={director.name}
          movies={director.movies}
        />
      ))}
    </div>
  );
}

export default Directors;
