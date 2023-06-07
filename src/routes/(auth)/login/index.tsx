import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AuthComponent } from "~/components/auth/AuthComponent";

export default component$(() => {
  return (
    <>
      <AuthComponent
        title="Login"
        authLabel="Aun no tienes una cuenta? Registrate"
        pathNavigate="/register/"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Login Page",
};
