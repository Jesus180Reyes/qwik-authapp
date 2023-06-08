import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Form } from "@builder.io/qwik-city";
import { routeAction$ } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";
import { AuthComponent } from "~/components/auth/AuthComponent";
export const useAuthUser = routeAction$(async (data, { cookie, redirect }) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.create({
    data: {
      email: data.email.toString(),
      password: data.password.toString(),
    },
  });
  cookie.set("user", user);
  redirect(301, "/pokemons?limit=30&offset=0");
  return {
    ok: true,
    msg: "user Created Succesfully",
    user,
  };
});
export default component$(() => {
  const action = useAuthUser();
  return (
    <>
      <AuthComponent
        title="Register"
        authLabel="Tienes ya una cuenta? Inicia Sesion"
        pathNavigate="/login/"
      >
        <div q:slot="input-action-slot">
          <Form action={action}>
            <div class="text-box">
              <label>Email</label>
              <input name="email" type="email" placeholder="Email" />
            </div>
            <div class="text-box">
              <label>Password</label>
              <input name="password" type="password" placeholder="Password" />
            </div>
            <button type="submit" class="btn">
              Ingresar
            </button>
          </Form>
          {action.value?.ok && <p>User created succesfully</p>}
        </div>
      </AuthComponent>
    </>
  );
});

export const head: DocumentHead = {
  title: "Register Page",
};
