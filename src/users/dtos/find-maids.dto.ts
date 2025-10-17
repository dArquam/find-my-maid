import { Type } from 'class-transformer';
import { IsOptional, IsString, IsNumber, Min, Max, IsArray, ArrayNotEmpty, IsNotEmpty } from 'class-validator';

export class FindMaidsDto {
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    works: string[]

    @IsString()
    @IsNotEmpty()
    location: string
}