import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const userIsuserAuthenticated = routeLoader$(({ cookie, redirect }) => {
  const user = cookie.get("user");
  if (!user) {
    redirect(301, "/login");
    return;
  }
});
export default component$(() => {
  return (
    <>
      <h1>SSR PAGE</h1>
    </>
  );
});
