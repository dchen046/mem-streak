import { pokeAPI } from "./calls";

export const getPokemonList = async (amount) => {
    const list = [];

    while (list.length < amount) {
        const pokeId = Math.floor(Math.random() * 150) + 1;

        if (list.findIndex((e) => e.id === pokeId) === -1) {
            let pokeData = await pokeAPI(pokeId);
            list.push(pokeData);
        }
    }
    return list;
}