// tslint:disable:variable-name
// tslint:disable:max-classes-per-file
export class ClimateDataDto {
    public province_id!: number;
    public data!: ClimateDateDto[];
}

export class ClimateDateDto {
    public date!: Date;
    public climate_type!: string;
    public icon!: string;
    public mintemp_c!: number;
    public maxtemp_c!: number;
}

export class ClimateProvincesDto {
    public provinces!: ClimateProvinceChoiceDto[];
}

export class ClimateProvinceChoiceDto {
    public pid!: number;
    public name!: string;
}
