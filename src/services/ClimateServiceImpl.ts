import { IClimateService } from "./IClimateService";
import { ClimateDataDto, ClimateProvincesDto } from "../models/ClimateDataDto";
import { Service } from "typedi";
import configuration from "../../config";
import * as axios from "axios";

@Service()
export class ClimateServiceImpl implements IClimateService {
    public async getProvinces(): Promise<ClimateProvincesDto> {
        return (await axios.default.get<ClimateProvincesDto>(`${configuration.URL}/v1/climate/provinces`)).data;
    }

    public async getProvincesClimate(provinceId: number): Promise<ClimateDataDto> {
       return (await axios.default.get<ClimateDataDto>(`${configuration.URL}/v1/climate/provinces/${provinceId}`)).data;
    }
}
