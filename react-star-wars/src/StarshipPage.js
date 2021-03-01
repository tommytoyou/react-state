import React from 'react';
import {Link} from 'react-router-dom';

function Starship (props) {
  const starship = props.location.state;

  return(
    <div className="shipDiv">
      {starship ?
      <>
        <p>NAME: {starship.name}</p>
        <p>MODEL: {starship.model}</p>
        <Link to={{pathname: '/'}} className="returnBtn">RETURN</Link>
      </>
      : <h2>processing...</h2>}
    </div>
  )
}

export default Starship;