import { Col } from "react-bootstrap";


function Pokecard({name, imgSrc}) {
    return ( 
        <button>
            <Col>
                <img src={imgSrc}></img>
                <p>{name}</p> 
            </Col>
        </button>
    )
}

export default Pokecard;