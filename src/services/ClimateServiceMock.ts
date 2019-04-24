import { IClimateService } from "./IClimateService";
import { ClimateDataDto, ClimateProvincesDto } from "../models/ClimateDataDto";
import { Service } from "typedi";

@Service()
export class ClimateServiceMock implements IClimateService {
    public async getProvinces(): Promise<ClimateProvincesDto> {
        return {
            provinces: [{
                pid: 1,
                name: "Test Province 01",
            },
            {
                pid: 2,
                name: "Test Province 02",
            }],
        };
    }

    public async getProvincesClimate(provinceId: number): Promise<ClimateDataDto> {
        throw new Error("Method not implemented.");
    }
}
