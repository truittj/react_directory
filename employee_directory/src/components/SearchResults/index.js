import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.result.map(results => (
        <li key={results.cell} className="list-group-item">
          <img alt="Dog" src={results.picture.thumbnail} className="img-fluid" />
          {results.gender} {results.email}
          
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
