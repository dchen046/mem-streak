import { pokeAPI } from "./calls";

export const getPokemonList = async (amount) => {
    const list = [];

    while (list.length < amount) {
        const pokeId = Math.floor(Math.random() * 151);

        if (list.findIndex((e) => e.id === pokeId) === -1) {
            let pokeData = await pokeAPI(pokeId);
            // console.log(pokeData);
            list.push(pokeData);
            // console.log(`length is ${list.length}`);
            // console.log(amount);
            // console.log(list.length < amount);
        }
    }
    return list;
}