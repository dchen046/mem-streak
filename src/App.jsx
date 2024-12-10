import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Gameboard from './components/Gameboard';
import { getPokemonList } from './utils/pokemons';

function App() {
  const [scores, setScore] = useState({
    curr: 0,
    max: 0,
  });
  const [loading, setLoading] = useState(true);
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonList(9);
      setPokeData(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <Header scores={scores} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Gameboard pokemons={pokeData} scores={scores} setScore={setScore} />
      )}
    </>
  )
}

export default App
