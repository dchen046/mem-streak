function Pokecard({ name, imgSrc, handleScore }) {
    return (
        <button onClick={handleScore} value={name}>
            <img src={imgSrc}></img>
            {name}
        </button>
    )
}

export default Pokecard;