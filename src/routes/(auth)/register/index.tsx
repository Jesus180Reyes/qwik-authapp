import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AuthComponent } from "~/components/auth/AuthComponent";

export default component$(() => {
  return (
    <>
      <AuthComponent
        title="Register"
        authLabel="Tienes ya una cuenta? Inicia Sesion"
        pathNavigate="/login/"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Register Page",
};
