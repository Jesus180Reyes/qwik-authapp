import type { RequestHandler } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";

export const onPost: RequestHandler = async (request) => {
  try {
    const body = await request.request.json();
    const prisma = new PrismaClient();
    const userExists = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (userExists) {
      request.json(401, { ok: false, msg: "This email already taken" });
      return;
    }
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    request.json(200, { ok: true, msg: "User register succesfully", user });
  } catch (error) {
    console.error(error);
    request.json(500, {
      ok: false,
      msg: `Hable con el administrador:: ${error}`,
    });
  }
};
