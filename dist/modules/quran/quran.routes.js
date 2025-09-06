import { Hono } from "hono";
import QuranService from "./service/quran.service.js";
import status from "http-status";
import log from "../../log/winston.js";
import { HTTPException } from "hono/http-exception";
const router = new Hono();
const quranService = new QuranService();
router.get("/", async (c) => {
    try {
        const type = c.req.query("type");
        const resJson = await quranService.getAllSurah(type);
        return c.json(resJson.properties, resJson.statusCode);
    }
    catch (error) {
        log.error("Failed to retrieve Surah", error);
        throw new HTTPException(status.INTERNAL_SERVER_ERROR, {
            message: "Failed to retrieve Surah",
        });
    }
});
router.get("/:surah_number", async (c) => {
    try {
        const surahNumber = parseInt(c.req.param("surah_number"));
        const resJson = await quranService.getSurah(surahNumber);
        return c.json(resJson.properties, resJson.statusCode);
    }
    catch (error) {
        log.error("Failed to retrieve Surah", error);
        throw new HTTPException(status.INTERNAL_SERVER_ERROR, {
            message: "Failed to retrieve Surah",
        });
    }
});
export default router;
