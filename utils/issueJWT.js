import { sign } from "hono/jwt";
import { env } from "hono/adapter";

export default async function issueJWT(c, userId) {
  const payload = {
    sub: userId,
    role: "admin",
    exp: 10000000000,
  };

  const { JWT_SECRET } = env(c);
  const token = await sign(payload, JWT_SECRET);

  return token;
}
