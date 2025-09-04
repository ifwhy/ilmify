import listSurah from '../../../data/surah/listsurah.json' with { type: "json" }
import type { IDetailSurah, ISurah } from './quran.types.js';
const { readFile } = await import('fs/promises');
const { fileURLToPath } = await import('url');
  const path = await import('path');
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

class QuranRepository {
  async getAllSurah() {
    return listSurah;
  }

  async getAllSurahMakkiyah(): Promise<ISurah[]>{
    return listSurah.filter(item => item.revelation_id === "Makkiyyah");
  }

  async getAllSurahMadaniyah(): Promise<ISurah[]>{
    return listSurah.filter(item => item.revelation_id === "Madaniyyah");
  }

    async getSurah(number: number): Promise<IDetailSurah> {
      const filePath = path.resolve(__dirname, `../../../data/surah/${number}.json`);
      const fileContent = await readFile(filePath, 'utf-8');
      return JSON.parse(fileContent);
  }
}

export default QuranRepository;
