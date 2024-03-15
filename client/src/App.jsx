import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters } from './redux/actions';
import './App.css'
import axios from 'axios';


const App = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/characters')
        dispatch(setCharacters(response.data));
      } catch (error){
        console.log('Error fetching data: ', error)
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
        <h1 className='Title'> Characters </h1>
          <div className="container">
          {characters.map((character) => (
            <div key={character.id} className="character" style={{ backgroundImage: `url(${character.image})` }}>
             <div className='character-content'>
             <h2>{character.name}</h2>
             <p>Height: {character.height}</p>
             <p>Mass: {character.mass}</p>
            </div>
          
          </div>
        ))}
      </div>  
    </>
  );
};

export default App
