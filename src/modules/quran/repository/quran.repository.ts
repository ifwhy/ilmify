import { PrismaClient, type Ayat, type Surah } from '../../../generated/prisma/index.js';

class QuranRepository {

  constructor(private readonly surah = new PrismaClient().surah){}

  async getAllSurah() {
    return await this.surah.findMany();
  }

  async getAllSurahMakkiyah(): Promise<Surah[]>{
    return await this.surah.findMany({
      where: {
        revelation_id: "Makkiyyah"
      }
    })
  }

  async getAllSurahMadaniyah(): Promise<Surah[]>{
    return await this.surah.findMany({
      where: {
        revelation_id: "Madaniyyah"
      }
    })
  }

  async getAyat(number: number): Promise<Ayat[]>{
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

  async getSurahName(number: number): Promise<{ name_id: string; name_en: string } | null> {
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
