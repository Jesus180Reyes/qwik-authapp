import { Slot, component$, useStore } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Navbar } from "~/components/shared/Navbar";

export const useCookies = routeLoader$(({ cookie }) => {
  const user = cookie.get("user");
  const { email, id, password, state } = user!.json() as any;
  return {
    email,
    id,
    password,
    state,
  };
});
export default component$(() => {
  const user = useCookies();
  const userStore = useStore({
    email: user.value!.email,
    id: user.value!.id,
    password: user.value!.password,
    state: user.value!.state,
  });
  return (
    <>
      <Navbar>
        <p q:slot="slot-user-details">{userStore.email}</p>
      </Navbar>
      <Slot />
    </>
  );
});
