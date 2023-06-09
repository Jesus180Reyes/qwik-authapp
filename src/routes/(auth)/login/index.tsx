import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeAction$ } from "@builder.io/qwik-city";
import { Form } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";
import { AuthComponent } from "~/components/auth/AuthComponent";

export const useLoginUser = routeAction$(async (data, { cookie, redirect }) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findFirst({
    where: { email: data.email.toString(), password: data.password.toString() },
  });
  if (!user) {
    return {
      ok: false,
      msg: "Credenciales no validas",
    };
  }

  cookie.set("user", user, { secure: true, path: "/" });
  redirect(301, "/pokemons?limit=50&offset=0");

  return {
    ok: true,
    msg: "Logged",
    user,
  };
});
export default component$(() => {
  const action = useLoginUser();
  return (
    <>
      <AuthComponent
        title="Login"
        authLabel="Aun no tienes una cuenta? Registrate"
        pathNavigate="/register/"
      >
        <div q:slot="input-action-slot">
          <Form action={action}>
            <div class="text-box" q:slot="">
              <label>Email</label>
              <input name="email" type="email" placeholder="Email" />
            </div>
            <div class="text-box">
              <label>Password</label>
              <input name="password" type="password" placeholder="Password" />
            </div>
            {action.value?.ok && <p>Logged</p>}
            <button type="submit" class="btn">
              Ingresar
            </button>
          </Form>
          <code>{JSON.stringify(action.value)}</code>
        </div>
      </AuthComponent>
    </>
  );
});

export const head: DocumentHead = {
  title: "Login Page",
};
