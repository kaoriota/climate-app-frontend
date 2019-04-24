import { ClimateProvincesDto, ClimateDataDto } from "@/models/ClimateDataDto";
import { Service, Token } from "typedi";

export interface IClimateService {
    getProvinces(): Promise<ClimateProvincesDto>;
    getProvincesClimate(provinceId: number): Promise<ClimateDataDto>;
}

export const ClimateService = new Token<IClimateService>();
