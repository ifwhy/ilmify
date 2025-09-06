import { PrismaClient } from "../../../generated/prisma/index.js";

class AsmaulHusnaRepository {
  constructor(private asmaulHusna = new PrismaClient().asmaulHusna) {}

  async getAll() {
    return await this.asmaulHusna.findMany();;
  }

  async getOne(number: number) {
    return await this.asmaulHusna.findUnique({
      where: { id: number },
    });
  }
}

export default AsmaulHusnaRepository;
