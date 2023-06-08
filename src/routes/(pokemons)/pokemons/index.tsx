import style from "./pokemons.css?inline";
import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { PokemonCard } from "~/components/pokemon/PokemonCard";
import type { PokemonsResponse } from "~/interfaces/pokemons_response_interface";

export const usePokemonsClients = routeLoader$(async ({ query }) => {
  const limit = Number(query.get("limit"));
  const offset = Number(query.get("offset"));
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: PokemonsResponse = await resp.json();
  const id = data.results.map((pokemon) => {
    const id = pokemon.url.split("/");
    return id.at(-2);
  });

  return { data, id };
});
export default component$(() => {
  useStylesScoped$(style);
  const pokemons = usePokemonsClients();

  return (
    <>
      <h1>Pokemon Page</h1>
      <div class="pokemons-container">
        {pokemons.value.id.map((pokemon, i) => {
          return <PokemonCard id={pokemon!} key={i} />;
        })}
      </div>
    </>
  );
});
