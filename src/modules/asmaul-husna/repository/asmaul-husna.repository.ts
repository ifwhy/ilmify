import asmaulHusna from '@/data/asmaulhusna/asmaulhusna.json' with { type: "json" };
import type { IAsmaulHusna } from './asmaul-husna.type.js';

class AsmaulHusnaRepository {
    private readonly data: IAsmaulHusna[] = asmaulHusna;

    getAll(){
        return this.data
    }

    getOne(number: number){
        return this.data.find((item) => item.number === number)
    }
}

export default AsmaulHusnaRepository;