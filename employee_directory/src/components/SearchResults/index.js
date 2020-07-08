import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.result.map(results => (
        <li key={results.cell} className="list-group-item">
          <img alt= {results.name.last} src={results.picture.medium} className="img-fluid" />
            <h1>{results.name.title} {results.name.first} {results.name.last}</h1>
            <h3>{results.email}</h3>
            <h3>{results.phone}</h3>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
