import { Slot, component$ } from "@builder.io/qwik";
import "../../global.css";
import { routeLoader$ } from "@builder.io/qwik-city";
export const useIsUserAuth = routeLoader$(({ cookie, redirect }) => {
  const user = cookie.get("user");

  if (user) {
    redirect(301, "/pokemons");
    return;
  }
  return;
});
export default component$(() => {
  return (
    <>
      <Slot />
    </>
  );
});
