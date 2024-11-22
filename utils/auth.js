import { decode, sign, verify } from "hono/jwt";
import { env } from "hono/adapter";

export async function issueJWT(c, userId) {
  const payload = {
    sub: userId,
    role: "admin",
    exp: 1000000,
  };

  const { JWT_SECRET } = env(c);
  const token = await sign(payload, JWT_SECRET);

  return token;
}
