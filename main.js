import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import indexRouter from "./routes/index.js";
import connectDB from "./config/db.js";

const app = new Hono();

connectDB();

app.use(prettyJSON());

app.route("/api/v1", indexRouter);

app.onError((err, c) => {
  console.error(`${err}`);
  return c.json({ error: err }, 500);
});

Deno.serve(app.fetch);
