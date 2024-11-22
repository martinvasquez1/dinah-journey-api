import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import indexRouter from "./routes/index.js";

const app = new Hono();

app.use(prettyJSON());

app.route("/api", indexRouter);

Deno.serve(app.fetch);
