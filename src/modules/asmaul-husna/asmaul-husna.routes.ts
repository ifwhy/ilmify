import { Hono } from "hono";
import AsmaulHusnaService from "./service/asmaul-husna.service.js";
import status from "http-status";
import log from "log/winston.js";
import { HTTPException } from "hono/http-exception";

const router = new Hono();
const asmaulHusna = new AsmaulHusnaService();

router.get("/", async (c) => {
  try {
    const resJson = await asmaulHusna.getAll();

    return c.json(resJson.properties, resJson.statusCode);
  } catch (error) {
    log.error("Failed to retrieve Asmaul Husna", error);
    throw new HTTPException(status.BAD_REQUEST, {
      message: "Failed to retrieve Asmaul Husna",
    });
  }
});

router.get("/:number", async (c) => {
  try {
    const number = parseInt(c.req.param("number"));
    const resJson = await asmaulHusna.getOne(number);

    return c.json(resJson.properties, resJson.statusCode);
  } catch (error) {
    log.error("Failed to retrieve one Asmaul Husna", error);
    throw new HTTPException(status.INTERNAL_SERVER_ERROR, {
      message: "Failed to retrieve one Asmaul Husna",
    });
  }
});

export default router;
