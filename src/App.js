import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from './components/Character'
import './App.css';


const App = () => {
  const [characters, setCharacters] = useState([{
    name:'Placeholder',
    gender:'placeholder',
    height: 'Placeholder',
    mass: 'Placeholder',
    hair_color: 'Placeholder',
    skin_color: 'Placeholder',
    eye_color: 'Placeholder',
    birth_year: 'Placeholder'
}, ])
  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
    .then((data => {
      setCharacters(data.data);
    }))
  }, []);

  console.log(characters);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(character => {
        return (<Character characterObj={character}/>)
      })}
    </div>
  );
}

export default App;
