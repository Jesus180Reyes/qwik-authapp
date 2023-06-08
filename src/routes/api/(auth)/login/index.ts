import type { RequestHandler } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";

export const onPost: RequestHandler = async (request) => {
  try {
    const prisma = new PrismaClient();
    const body = await request.request.json();
    const user = await prisma.user.findFirst({
      where: { email: body.email, password: body.password },
    });

    if (!user?.state) {
      request.json(403, {
        ok: false,
        msg: "Estas actualmente baneado de la plataforma",
      });
      return;
    }
    if (!user) {
      request.json(403, { ok: false, msg: "Credenciales incorrectas" });
      return;
    }
    request.json(200, { ok: true, msg: "Logged", user });
  } catch (error) {
    console.error(error);
    request.json(500, {
      ok: true,
      msg: `Hable con el administrador:: ${error}`,
    });
  }
};
