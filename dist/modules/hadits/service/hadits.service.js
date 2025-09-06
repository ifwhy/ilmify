import HaditsRepository from "../repository/hadits.repository.js";
import status from "http-status";
import log from "../../../log/winston.js";
class HaditsService {
    haditsRepository;
    constructor(haditsRepository = new HaditsRepository()) {
        this.haditsRepository = haditsRepository;
    }
    async getAllListHadits() {
        const listHadits = await this.haditsRepository.getAllListHadits();
        return {
            properties: {
                success: true,
                message: "Get list of all hadits available",
                data: listHadits,
            },
            statusCode: status.OK,
        };
    }
    async getDetailHadits(rawi, page, limit) {
        const perawi = [
            "abu-dawud",
            "ahmad",
            "bukhari",
            "darimi",
            "ibnu-majah",
            "malik",
            "muslim",
            "nasai",
            "tirmidzi",
        ];
        if (!perawi.includes(rawi)) {
            log.info(`Invalid rawi name: ${rawi}`);
            return {
                properties: {
                    success: false,
                    message: "Rawi's name is invalid",
                },
                statusCode: status.BAD_REQUEST,
            };
        }
        const hadits = await this.haditsRepository.getAllHadits(rawi, page, limit);
        return {
            properties: {
                success: true,
                message: `Get hadits for ${rawi}`,
                limit,
                page,
                data: hadits,
            },
            statusCode: status.OK,
        };
    }
}
export default HaditsService;
