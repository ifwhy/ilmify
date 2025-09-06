import type { Response } from "types/response.type.js";
import AsmaulHusnaRepository from "../repository/asmaul-husna.repository.js";
import status from "http-status";

class AsmaulHusnaService {
  constructor(
    private readonly repository: AsmaulHusnaRepository = new AsmaulHusnaRepository()
  ) {}

  async getAll(): Promise<Response> {
    return {
      properties: {
        success: true,
        message: "Get All Asmaul Husna",
        data: await this.repository.getAll(),
      },
      statusCode: status.OK,
    };
  }

  async getOne(number: number): Promise<Response> {
    const data = await this.repository.getOne(number);
    return {
      properties: {
        success: true,
        message: "Get One Asmaul Husna",
        data,
      },
      statusCode: status.OK,
    };
  }
}

export default AsmaulHusnaService;
