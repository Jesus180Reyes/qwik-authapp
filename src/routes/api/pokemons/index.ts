import type { RequestHandler } from "@builder.io/qwik-city";
import type { PokemonsResponse } from "../../../interfaces/pokemons_response_interface";

export const onGet: RequestHandler = async (request) => {
  const limit = Number(request.query.get("limit"));
  const offset = Number(request.query.get("offset"));
  if (isNaN(limit) || isNaN(offset)) {
    request.json(400, { ok: false, msg: "You need to add number not letters" });
    return;
  }
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: PokemonsResponse = await resp.json();
  request.json(200, { ok: true, data });
};
