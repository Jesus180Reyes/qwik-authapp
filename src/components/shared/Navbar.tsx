import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
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
        <p>SignOut</p>
      </div>
      {/* <code>{JSON.stringify(user.value)}</code> */}
    </div>
  );
});
