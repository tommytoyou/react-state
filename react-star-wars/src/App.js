import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './style.css';
import StarshipPage from './StarshipPage';
import Home from './Home';


function App() {
  const [data, setdata] = useState([])
  useEffect(()=> {
    const getData = async()=> {
      let response = await fetch ('https://swapi.dev/api/starships/')
    response = await response.json()
    response = response.results
    }
    getData()
  },[])  

// function App() {
//   // starships
//   let [starships, setStarships] = useState([]);

//   // make an axios call and update the starships
//   useEffect(() => {
//     axios.get('https://swapi.dev/api/starships/')
//     .then(response => {
//       setStarships(response.data.results);
//     })
//   }, [])

  return(
    <>
      <header>STAR WARS</header>
      <BrowserRouter>
        <Switch>
          <Route
            path='/starship'
            render={({location}) => <StarshipPage location={location} />} >
          </Route>
          <Route
            exact
            path="/"
            render={()=><Home starships={starships} />} >
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;