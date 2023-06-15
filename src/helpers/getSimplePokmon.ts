import type { SinglePokemonResponse } from "~/interfaces/single_pokemon_response";

export const getSimplePokemon = async (pokemon: number) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon || 1}`);
  const data: SinglePokemonResponse = await resp.json();
  return data;
};
