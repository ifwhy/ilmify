import listSurah from '@/data/surah/listsurah.json' with { type: "json" }
import type { ISurah } from './quran.types.js';

class QuranRepository {
  async getAllSurah() {
    return listSurah;
  }

  async getAllSurahMakkiyah(): Promise<ISurah[]>{
    return listSurah.filter(item => item.revelation_id === "Makkiyah");
  }

  async getAllSurahMadaniyah(): Promise<ISurah[]>{
    return listSurah.filter(item => item.revelation_id === "Madaniyah");
  }

  async getSurah(number: number): Promise<ISurah> {
    const surah = await import(`@/public/data/surah/${number}.json`, {
      assert: { type: "json" },
    });
    return surah.default;
  }
}

export default QuranRepository;
