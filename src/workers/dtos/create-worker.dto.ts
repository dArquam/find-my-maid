import { IsString, IsInt, IsOptional, IsEmail, Min, Max, IsEnum, MaxLength, IsPhoneNumber, IsArray, IsNotEmpty, ArrayNotEmpty } from 'class-validator';
import { Gender } from 'src/shared/common.enum';
export class CreateWorkerDto {
    @IsString()
    @MaxLength(20)
    firstName: string;

    @MaxLength(20)
    @IsString()
    lastName: string;

    @IsInt()
    @Min(18)
    @Max(65)
    age: number;

    @IsEnum(Gender)
    gender: Gender;

    @IsEmail()
    email: string;

    @IsPhoneNumber("IN")
    phone: string;

    @IsString()
    address: string;

    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    @ArrayNotEmpty()
    skills: string[];
}