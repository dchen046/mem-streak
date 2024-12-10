import { Col } from "react-bootstrap";


function Pokecard({name}) {
    return ( 
        <button>
            <Col>
                <p>Image Here</p>
                <p>{name}</p> 
            </Col>
        </button>
    )
}

export default Pokecard;