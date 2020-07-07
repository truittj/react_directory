import React from "react";

function Col(props) {
  //const size = props.size.split(" ").map(size => "col-" + size).join(" ");
//add back the size prperty once made. 
  return <div className="col-" {...props} />;
}

export default Col;
