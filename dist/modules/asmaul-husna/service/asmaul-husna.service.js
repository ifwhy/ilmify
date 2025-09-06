import AsmaulHusnaRepository from "../repository/asmaul-husna.repository.js";
import status from "http-status";
class AsmaulHusnaService {
    repository;
    constructor(repository = new AsmaulHusnaRepository()) {
        this.repository = repository;
    }
    async getAll() {
        return {
            properties: {
                success: true,
                message: "Get All Asmaul Husna",
                data: await this.repository.getAll(),
            },
            statusCode: status.OK,
        };
    }
    async getOne(number) {
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
