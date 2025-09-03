import { Hono } from "hono";
import HaditsService from "./service/hadits.service.js";
import status from "http-status";
import { HTTPException } from "hono/http-exception";
import log from "../../log/winston.js";

const router = new Hono();
const haditsService = new HaditsService();

router.get("/", async (c) => {
  try {
    const resJson = await haditsService.getAllListHadits();
    return c.json(resJson.properties, resJson.statusCode);
  } catch (error) {
    log.error("Failed to get list of all hadits", error);
    throw new HTTPException(status.INTERNAL_SERVER_ERROR, {
      message: "Failed to get list of all hadits",
    });
  }
});

router.get("/:rawi", async (c) => {
  try {
    const rawi = c.req.param("rawi").toLowerCase();
    const page = Number(c.req.query("page")) || 1;
    const limit = Number(c.req.query("limit")) || 10;
    const resJson = await haditsService.getDetailHadits(rawi, page, limit);
    return c.json(resJson.properties, resJson.statusCode);
  } catch (error) {
    log.error("Failed to get detail hadits", error);
    throw new HTTPException(status.INTERNAL_SERVER_ERROR, {
      message: "Failed to get detail hadits",
    });
  }
});

export default router;
