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
            <h3>Score: {scores.curr}</h3>
            <h3>Max: {scores.max}</h3>
        </>
    )
}

export default Header;