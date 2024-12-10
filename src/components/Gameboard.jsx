import { Col } from 'react-bootstrap';
import '../styles/styles.css'
import Pokecard from './Pokecard';
import { useState } from 'react';
import { shuffle } from '../utils/shuffle';

function Gameboard({ pokemons, scores, setScore }) {

    const updateScore = () => {
        let score = scores.curr + 1;
        if (score > scores.max) {
            setScore({
                curr: score,
                max: score,
            });
        } else {
            setScore(prev => ({
                ...prev,
                curr: score,
            }));
        }
        if (score === 9) alert('You Win!');
    }

    const [clickedPokemon, setClickedPokemon] = useState([]);

    const updateClickedPokemon = (e) => {
        const name = e.currentTarget.value;
        if (!clickedPokemon.includes(name)) {
            setClickedPokemon(prev => [...prev, name]);
            updateScore();
            
        } else {
            setScore(prev => ({
                ...prev,
                curr: 0,
            }));
            setClickedPokemon([]);
            alert("You Lose! Already Clicked This One");
        }
        shuffle(pokemons);
    }

    return (
        <Col id='gameboard'>
            <PlayCards pokemons={pokemons} updateClickedPokemon={updateClickedPokemon} />
        </Col>
    )
}

function PlayCards({ pokemons, updateClickedPokemon }) {
    return (
        pokemons.map((pokemon, index) => {
            return <Pokecard key={index} name={pokemon.name} imgSrc={pokemon.sprites.front_default} handleScore={updateClickedPokemon} />
        })
    )
}

export default Gameboard;