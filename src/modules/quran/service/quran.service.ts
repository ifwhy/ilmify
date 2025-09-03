import type { Response } from "types/response.type.js";
import QuranRepository from "../repository/quran.repository.js";
import status from "http-status";

class QuranService {
  private readonly repository: QuranRepository = new QuranRepository();

  async getAllSurah(
    location: "all" | "makkiyah" | "madaniyah" = "all"
  ): Promise<Response> {
    let surah;

    if (location === "makkiyah") {
      surah = await this.repository.getAllSurahMakkiyah();
      return {
        properties: {
          success: true,
          message: "List of Surah Makkiyah in the Quran",
          data: surah,
        },
        statusCode: status.OK,
      };
    } else if (location === "madaniyah") {
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

    const surah = await this.repository.getSurah(number);

    return {
      properties: {
        success: true,
        message: `Details of Surah ${surah.revelation_en}`,
        data: surah,
      },
      statusCode: status.OK,
    };
  }
}

export default QuranService;
