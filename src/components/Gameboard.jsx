import { Col } from 'react-bootstrap';
import '../styles/styles.css'
import Pokecard from './Pokecard';

function Gameboard({pokemons}) {
    return (
        <Col id='gameboard'>
            <PlayCards pokemons={pokemons} />
        </Col>
    )
}

function PlayCards({pokemons}) {
    return (
        pokemons.map( (pokemon, index) => {
            console.log(pokemon);
            return <Pokecard key={index} name={pokemon.name}/> 
        })
    )
}

export default Gameboard;