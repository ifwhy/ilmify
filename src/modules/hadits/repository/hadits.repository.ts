import { PrismaClient, type Hadits } from 'generated/prisma/index.js';

class HaditsRepository {

    constructor(private readonly hadits = new PrismaClient().hadits) {}

    async getAllListHadits(): Promise<Hadits[]> {
        return this.hadits.findMany();
    }

    async getAllHadits(rawi: "abu-dawud" | "ahmad" | "bukhari" | "darimi" | "ibnu-majah" | "malik" | "muslim" | "nasai" | "tirmidzi", page: number = 1, limit: number = 10): Promise<Hadits[]> {
        const skip = (page - 1) * limit;
        return this.hadits.findMany({
            where: { slug: rawi },
            include: {
                details: {
                    skip,
                    take: limit,
                    select: {
                        id: true,
                        number: true,
                        arab: true,
                        terjemah: true,
                    }
                }
            },
        });
    }
}

export default HaditsRepository
