import type { RequestHandler } from "@builder.io/qwik-city";

export const onPost: RequestHandler = (request) => {
  request.json(200, { ok: true, msg: "Login " });
};
