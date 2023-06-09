import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import style from "../../global.css?inline";
export const Navbar = component$(() => {
  useStylesScoped$(style);
  return (
    <div class="navbar-container">
      <div class="items-nav">
        <Link
          style={{
            "margin-right": "10px",
            "text-decoration": "none",
            color: "#fff",
          }}
          href="/"
        >
          Home
        </Link>
        <Link
          style={{
            "margin-right": "10px",
            "text-decoration": "none",
            color: "#fff",
          }}
          href="/pokemons/"
        >
          Pokemons
        </Link>
        <Link
          style={{
            "margin-right": "10px",
            "text-decoration": "none",
            color: "#fff",
          }}
          href="/ssr/"
        >
          SSR
        </Link>
        <Link
          style={{
            "margin-right": "10px",
            "text-decoration": "none",
            color: "#fff",
          }}
          href="/client/"
        >
          Client
        </Link>
        <Link
          style={{
            "margin-right": "10px",
            "text-decoration": "none",
            color: "#fff",
          }}
          href="/api/pokemons/"
        >
          API Pokemons
        </Link>
      </div>
      <div class="user-details">
        <Slot name="slot-user-details" />
      </div>
      {/* <code>{JSON.stringify(user.value)}</code> */}
    </div>
  );
});
