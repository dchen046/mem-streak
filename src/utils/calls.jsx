export const pokeAPI = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const response = await fetch(url);
    const data = await response.json();
    if (data) return data;
}