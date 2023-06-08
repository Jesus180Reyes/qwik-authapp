import style from "../../routes/(pokemons)/pokemons/pokemons.css?inline";
import { component$, useStylesScoped$ } from "@builder.io/qwik";
interface Props {
  id: string;
}
export const PokemonCard = component$(({ id }: Props) => {
  useStylesScoped$(style);
  return (
    <div class="pokemon-card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
        alt="Pokemon"
        width={90}
        height={90}
      />
    </div>
  );
});
