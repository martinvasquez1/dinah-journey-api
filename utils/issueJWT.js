import { sign } from "hono/jwt";

export default async function issueJWT(c, userId) {
  const payload = {
    sub: userId,
    role: "admin",
    exp: 10000000000,
  };

  const JWT_SECRET = Deno.env.get("JWT_SECRET");
  const token = await sign(payload, JWT_SECRET);

  return token;
}
