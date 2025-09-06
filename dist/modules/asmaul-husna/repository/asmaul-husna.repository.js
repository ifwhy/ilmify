import { PrismaClient } from "../../../generated/prisma/index.js";
class AsmaulHusnaRepository {
    asmaulHusna;
    constructor(asmaulHusna = new PrismaClient().asmaulHusna) {
        this.asmaulHusna = asmaulHusna;
    }
    async getAll() {
        return await this.asmaulHusna.findMany();
        ;
    }
    async getOne(number) {
        return await this.asmaulHusna.findUnique({
            where: { id: number },
        });
    }
}
export default AsmaulHusnaRepository;
