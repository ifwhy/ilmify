import { PrismaClient } from '../../../generated/prisma/index.js';
class QuranRepository {
    surah;
    constructor(surah = new PrismaClient().surah) {
        this.surah = surah;
    }
    async getAllSurah() {
        return await this.surah.findMany();
    }
    async getAllSurahMakkiyah() {
        return await this.surah.findMany({
            where: {
                revelation_id: "Makkiyyah"
            }
        });
    }
    async getAllSurahMadaniyah() {
        return await this.surah.findMany({
            where: {
                revelation_id: "Madaniyyah"
            }
        });
    }
    async getAyat(number) {
        const surah = await this.surah.findUnique({
            include: {
                ayat: true,
            },
            where: {
                id: number
            },
        });
        return surah?.ayat ?? [];
    }
    async getSurahName(number) {
        return await this.surah.findUnique({
            where: {
                id: number
            },
            select: {
                name_id: true,
                name_en: true,
            }
        });
    }
}
export default QuranRepository;
