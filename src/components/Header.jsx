import { Col } from "react-bootstrap";
function Header({ scores }) {
    return (
        <header>
            <Col>
                <Title title='Poke-Streaks' />
                <Scores scores={scores} />
            </Col>
        </header>
    )
}


function Title({ title }) {
    return (
        <h1>{title}</h1>
    )
}

function Scores({ scores }) {
    return (
        <>
            <p>Score: {scores.curr}</p>
            <p>Max: {scores.max}</p>
        </>
    )
}

export default Header;