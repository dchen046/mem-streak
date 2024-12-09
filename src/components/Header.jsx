
function Header({score}) {
    return (
        <header>
            <Title title='Poke-Streaks' />
            <Scores currScore={score} />
        </header>
    )
}


function Title({title}) {
    return (
        <h1>{title}</h1>
    )
}

function Scores({currScore}) {
    return (
        <p>Score: {currScore}</p>
    )
}

export default  Header;