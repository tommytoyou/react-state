import React from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
  return(
    <div className="starshipsDiv">
      {props.starships.length >
       0 ? props.starships.map(starship => {
        const location = { pathname: '/starship', state: starship
        }
        return (
          <Link to={location} key={starship.name}
            className="starshipBtn">{starship.name}</Link>
        )
      })
         : <p>Processing...</p>
    }
    </div>
  )
}
export default Home;

// The expression x and y first evaluates x; if x is false,
// its value is returned; otherwise, y is evaluated and the 
//resulting value is returned.

// The expression x or y first evaluates x; if x is true,
// its value is returned; otherwise, y is evaluated and 
//the resulting value is returned.

// So, True and 0 or 1 evaluates the first argument of the
// and operator, which is True. Then it returns the second 
//argument, which is 0.

// Since the True and 0 returns false value, the or operator
// returns the second argument (i.e. 1)