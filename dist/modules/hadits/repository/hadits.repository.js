import { PrismaClient } from '../../../generated/prisma/index.js';
class HaditsRepository {
    hadits;
    constructor(hadits = new PrismaClient().hadits) {
        this.hadits = hadits;
    }
    async getAllListHadits() {
        return this.hadits.findMany();
    }
    async getAllHadits(rawi, page = 1, limit = 10) {
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
export default HaditsRepository;
