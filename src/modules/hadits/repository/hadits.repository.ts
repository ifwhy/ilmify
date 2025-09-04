import listHadits from '../../../data/hadits/list.json' with { type: "json" }
import type { IDetailHadits, IListHadits } from './hadits.type.js';
const { readFile } = await import('fs/promises');
const path = await import('path');
const { fileURLToPath } = await import('url');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class HaditsRepository {
    async getAllListHadits(): Promise<IListHadits[]> {
        return listHadits as IListHadits[];
    }

    async getAllHadits(rawi: "abu-dawud" | "ahmad" | "bukhari" | "darimi" | "ibnu-majah" | "malik" | "muslim" | "nasai" | "tirmidzi", page: number = 1, limit: number = 10): Promise<IDetailHadits[]> {
        const filePath = path.resolve(__dirname, `../../../data/hadits/${rawi}.json`);
        const fileContent = await readFile(filePath, 'utf-8');
        const allHadits: IDetailHadits[] = JSON.parse(fileContent);

        const indexStart = (page - 1) * limit;
        const indexEnd = indexStart + limit;

        return allHadits.slice(indexStart, indexEnd);
    }
}

export default HaditsRepository
