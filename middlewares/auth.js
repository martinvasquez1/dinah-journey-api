import { verify } from "hono/jwt";
import { env } from "hono/adapter";

export async function authUser(c, next) {
  let token = c.req.header("x-access-token");

  if (!token) {
    return c.json({ status: "fail", data: { message: "Unauthorized." } });
  }

  const { JWT_SECRET } = env(c);

  try {
    const decodedPayload = await verify(token, JWT_SECRET);
    c.user = decodedPayload;
    await next();
  } catch (e) {
    return c.json({ status: "fail", data: { message: "Invalid token." } });
  }
}
