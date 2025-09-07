import type { Response } from "types/response.type.js";
import QuranRepository from "../repository/quran.repository.js";
import status from "http-status";
import type { Ayat } from "generated/prisma/index.js";

class QuranService {
  private readonly repository: QuranRepository = new QuranRepository();

  async getAllSurah(
    location: "all" | "makkiyyah" | "madaniyyah" = "all"
  ): Promise<Response> {
    let surah;

    if (location === "makkiyyah") {
      surah = await this.repository.getAllSurahMakkiyah();
      return {
        properties: {
          success: true,
          message: "List of Surah Makkiyah in the Quran",
          data: surah,
        },
        statusCode: status.OK,
      };
    } else if (location === "madaniyyah") {
      surah = await this.repository.getAllSurahMadaniyah();
      return {
        properties: {
          success: true,
          message: "List of Surah Madaniyah in the Quran",
          data: surah,
        },
        statusCode: status.OK,
      };
    }

    surah = await this.repository.getAllSurah();

    return {
      properties: {
        success: true,
        message: "List of Surah in the Quran",
        data: surah,
      },
      statusCode: status.OK,
    };
  }

  async getSurah(number: number): Promise<Response> {
    if (number < 1 || number > 114) {
      return {
        properties: {
          success: false,
          message:
            "Surah number should be greater than 0 and less than or equal to 114",
        },
        statusCode: status.BAD_REQUEST,
      };
    }

    const ayat= await this.repository.getAyat(number);
    const surah = await this.repository.getSurahName(number);

    if (!surah) {
      return {
        properties: {
          success: false,
          message: `Surah with number ${number} not found`,
        },
        statusCode: status.NOT_FOUND,
      };
    }

    return {
      properties: {
        success: true,
        message: `Details of Surah ${surah.name_id}`,
        data: ayat,
      },
      statusCode: status.OK,
    };
  }
}

export default QuranService;
