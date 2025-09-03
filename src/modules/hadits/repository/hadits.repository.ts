import listHadits from '../../../data/hadits/list.json' with { type: "json" }
import type { IDetailHadits, IListHadits } from './hadits.type.js';

class HaditsRepository {
    async getAllListHadits(): Promise<IListHadits[]> {
        return listHadits as IListHadits[];
    }

    async getAllHadits(rawi:"abu-dawud" | "ahmad" | "bukhari" | "darimi" | "ibnu-majah" | "malik" | "muslim" | "nasai" | "tirmidzi", page:number = 1, limit:number = 10): Promise<IDetailHadits[]>{
        const { default: allHadits } = await import(`../../../data/hadits/${rawi}.json`, {
            assert: { type: "json" },
        });

        const indexStart = (page - 1) * limit;
        const indexEnd = indexStart + limit;

        return allHadits.slice(indexStart, indexEnd);
    }
}

export default HaditsRepository
