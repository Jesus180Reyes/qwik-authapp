import style from "../../(pokemons)/ssr/pokemonssr.css?inline";
import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$, useLocation, useNavigate } from "@builder.io/qwik-city";
import { getSimplePokemon } from "~/helpers/getSimplePokmon";

export const userIsuserAuthenticated = routeLoader$(
  async ({ cookie, redirect, query, pathname }) => {
    const pokemon = Number(query.get("pokemon"));
    if (isNaN(pokemon)) {
      redirect(301, pathname);
    }
    const user = cookie.get("user");
    if (!user) {
      redirect(301, "/login");
      return;
    }
    const data = await getSimplePokemon(pokemon);
    console.log("Desde el Server");
    return data;
  }
);
export default component$(() => {
  useStylesScoped$(style);
  const navigate = useNavigate();
  const location = useLocation();
  const pokemonIndex = Number(location.url.searchParams.get("pokemon"));
  const pokemon = userIsuserAuthenticated();
  const pokemonCount = useSignal<number>(pokemonIndex || 1);

  const onNextPokemon = $(() => {
    navigate(`/ssr/?pokemon=${(pokemonCount.value += 1)}`);
  });
  const onPreviousPokemon = $(() => {
    navigate(`/ssr/?pokemon=${(pokemonCount.value -= 1)}`);
  });
  return (
    <>
      <h1>SSR PAGE</h1>
      <div class="pokemon-container">
        <h2>{pokemonCount}</h2>
        <h2>{pokemon.value?.name}</h2>
        {location.isNavigating && <p>Cargando...</p>}
        <div class="pokemon-card ">
          <img
            src={pokemon.value?.sprites.front_default}
            alt={pokemon.value?.name}
            height={120}
            width={120}
          />
        </div>
        <div class="btn-pokemons">
          <button disabled={location.isNavigating} onClick$={onPreviousPokemon}>
            Anterior
          </button>
          <button disabled={location.isNavigating} onClick$={onNextPokemon}>
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Pokemon SSR",
};
