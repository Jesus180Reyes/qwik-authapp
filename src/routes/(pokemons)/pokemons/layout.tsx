import { Slot, component$, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Navbar } from "~/components/shared/Navbar";

export const useCookies = routeLoader$(({ cookie, redirect }) => {
  const user = cookie.get("user");
  if (!user) {
    redirect(301, "/login/");
    return;
  }
  const {
    email = "",
    id = 0,
    password = "",
    state = true,
  } = user!.json() as any;
  return {
    email,
    id,
    password,
    state,
  };
});
export default component$(() => {
  const user = useCookies();
  const usersignal = useSignal(user);
  return (
    <>
      <Navbar>
        <p q:slot="slot-user-details">{usersignal.value.value?.email}</p>
        <button q:slot="slot-user-details">Signout</button>
      </Navbar>
      <Slot />
    </>
  );
});
