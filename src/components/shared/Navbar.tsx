import style from "../../global.css?inline";
import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
export const Navbar = component$(() => {
  const navigate = useNavigate();
  useStylesScoped$(style);
  return (
    <div class="navbar-container">
      <div class="items-nav">
        <a href="/" class="links-items">
          Home
        </a>
        <a href="/pokemons/" class="links-items">
          Pokemons
        </a>
        <a href="/ssr/" class="links-items">
          SSR
        </a>
        <a href="/client/" class="links-items">
          Client
        </a>
        <a class="links-items" onClick$={() => navigate("/api/pokemons/")}>
          Api Pokemons
        </a>
      </div>
      <div class="user-details">
        <Slot name="slot-user-details" />
      </div>
    </div>
  );
});
