import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from './components/Character'
import './App.css';


const App = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
    .then((data => {
      setCharacters(data.data);
    }))
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(character => {
        return (<Character characterObj={character}/>)
        /* Iterate through each Character and add a new Character Component for each one to the DOM using React.*/
      })}
    </div>
  );
}

export default App;
