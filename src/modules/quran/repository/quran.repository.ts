import { PrismaClient } from "@prisma/client";
import type { Ayat, Surah } from "generated/prisma/index.js";
import type { IDetailSurah } from "./quran.types.js";

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

  async getAyat(number: number): Promise<IDetailSurah>{
    const ayat = await this.surah.findMany({
      include: {
        ayat: {
          orderBy: {
            ayat_number: 'asc'
          }
        },
      },
      where: {
        id: number
      }
    });
    return ayat as unknown as IDetailSurah;
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
