import { serve } from "@hono/node-server";
import { Hono, type Context } from "hono";
import { cors } from "hono/cors";
import asmaulHusnaRouter from "./modules/asmaul-husna/asmaul-husna.routes.js";
import status from "http-status";
import { logger } from "hono/logger";
import quranRouter from "./modules/quran/quran.routes.js";
import haditsRouter from "./modules/hadits/hadits.routes.js";

const app = new Hono();

app.use(logger());
app.use(
  cors({
    origin: "*",
    allowMethods: ["GET"],
    credentials: false,
  })
);

app.route("/asmaul-husna", asmaulHusnaRouter);
app.route("/quran", quranRouter);
app.route("/hadits", haditsRouter);

app.get("/", (c: Context) => {
  return c.json({
    author: "Ivan Wahyu Nugroho",
    instagram: "https://instagram.com/ifwhy",
    github: "https://github.com/ifwhy",
    message: "If something wrong, please contact me",
    docs: "https://docs.example.com",
  });
});

app.notFound((c: Context) => {
  return c.json(
    {
      success: false,
      message: "Route not found",
    },
    status.NOT_FOUND
  );
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
