import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import style from "../../global.css?inline";
export const Navbar = component$(() => {
  useStylesScoped$(style);
  return (
    <div class="navbar-container">
      <div class="items-nav">
        <Link href="/" class="links-items">
          Home
        </Link>
        <Link href="/pokemons/" class="links-items">
          Pokemons
        </Link>
        <Link href="/ssr/" class="links-items">
          SSR
        </Link>
        <Link href="/client/" class="links-items">
          Client
        </Link>
        <Link href="/api/pokemons/" class="links-items">
          API Pokemons
        </Link>
      </div>
      <div class="user-details">
        <Slot name="slot-user-details" />
      </div>
    </div>
  );
});
