import style from "../client/pokemonclient.css?inline";
import {
  $,
  component$,
  useSignal,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { getSimplePokemon } from "~/helpers/getSimplePokmon";
import type { SinglePokemonResponse } from "~/interfaces/single_pokemon_response";
export const useIsUserAuth = routeLoader$(({ cookie, redirect }) => {
  const user = cookie.get("user");
  if (!user) {
    redirect(301, "/login/");
    return;
  }
});
export default component$(() => {
  useStylesScoped$(style);
  const pokemonIndex = useSignal<number>(1);
  const pokemonResponse = useSignal<SinglePokemonResponse>();

  useVisibleTask$(async ({ track }) => {
    track(() => pokemonIndex.value);
    const data = await getSimplePokemon(pokemonIndex.value);
    pokemonResponse.value = data;
    console.log("Desde el cliente!!!");
  });

  const onNextPokemon = $(() => {
    pokemonIndex.value += 1;
  });
  const onPreviousPokemon = $(() => {
    if (pokemonIndex.value <= 1) return;
    pokemonIndex.value -= 1;
  });
  return (
    <>
      <h1>Pokemon Client</h1>
      <div class="pokemon-container">
        <h2>{pokemonIndex.value}</h2>
        <p>{pokemonResponse.value?.name}</p>
        <div class="pokemon-card">
          <img
            src={pokemonResponse.value?.sprites.front_default}
            width={120}
            height={120}
          />
        </div>
        <div class="btn-pokemons">
          <button onClick$={onPreviousPokemon}>Anterior</button>
          <button onClick$={onNextPokemon}>Siguiente</button>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Pokemon Client",
  meta: [
    {
      content: "Pokemon Client SSC",
    },
  ],
};
