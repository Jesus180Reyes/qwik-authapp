import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { PokemonsResponse } from "~/interfaces/pokemons_response_interface";

export default component$(() => {
  const pokemons = useSignal<PokemonsResponse>();
  useVisibleTask$(async () => {
    const resp = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"
    );
    const data: PokemonsResponse = await resp.json();
    pokemons.value = data;
  });

  return (
    <>
      <h1>Pokemon Client</h1>
      <ul>
        {pokemons.value?.results.map((pokemon) => {
          return (
            <div key={pokemon.name}>
              <p>{pokemon.name}</p>
            </div>
          );
        })}
      </ul>
    </>
  );
});
