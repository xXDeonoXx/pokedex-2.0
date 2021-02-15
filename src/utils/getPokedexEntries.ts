import Pokemon from '../@Types/Pokemon';
import api from '../services/api';

export default async (pokedexId: number) => {
  try {
    const pokemons: Pokemon[] = [];
    let response = await api.get(`/pokedex/${pokedexId}`);
    const pokedex = response.data.pokemon_entries;

    for (const pokemon of pokedex) {
      const pokemonSpeciesData = (await api.get(pokemon.pokemon_species.url))
        .data;
      const pokemonData = await (
        await api.get(`/pokemon/${pokemonSpeciesData.id}`)
      ).data;
      const pk: Pokemon = {
        name: pokemonData?.name,
        color: pokemonSpeciesData?.color.name,
        flavor_text: pokemonSpeciesData?.flavor_text_entries[0].flavor_text,
        image_url: pokemonData?.sprites.other['official-artwork'].front_default,
        pokedex_number: pokemon?.entry_number,
      };
      pokemons.push(pk);
    }
    return pokemons;
  } catch (error) {
    console.log(error);
  }
};
