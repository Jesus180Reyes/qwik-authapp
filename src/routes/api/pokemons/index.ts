import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = (request) => {
  request.json(200, { ok: true, msg: "Get Pokemons" });
};
