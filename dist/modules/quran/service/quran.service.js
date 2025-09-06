import QuranRepository from "../repository/quran.repository.js";
import status from "http-status";
class QuranService {
    repository = new QuranRepository();
    async getAllSurah(location = "all") {
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
        }
        else if (location === "madaniyyah") {
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
    async getSurah(number) {
        if (number < 1 || number > 114) {
            return {
                properties: {
                    success: false,
                    message: "Surah number should be greater than 0 and less than or equal to 114",
                },
                statusCode: status.BAD_REQUEST,
            };
        }
        const ayat = await this.repository.getAyat(number);
        const surah = await this.repository.getSurahName(number);
        if (!surah || ayat.length === 0) {
            return {
                properties: {
                    success: false,
                    message: `Surah with number ${ayat[0].surah_number} not found`,
                },
                statusCode: status.NOT_FOUND,
            };
        }
        return {
            properties: {
                success: true,
                message: `Details of Surah Number ${surah.name_id}`,
                data: ayat,
            },
            statusCode: status.OK,
        };
    }
}
export default QuranService;
