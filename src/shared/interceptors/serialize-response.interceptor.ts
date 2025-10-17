import { CallHandler, ExecutionContext, NestInterceptor, Type, UseInterceptors } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { map } from "rxjs";


export function Serialize<T>(dto: Type<T>) {
    return UseInterceptors(new SerializeResponse(dto));
}

export class SerializeResponse implements NestInterceptor {
    constructor(private dto: any) {}
    intercept(context: ExecutionContext, next: CallHandler) {
        return next.handle().pipe(map((data) => {
            console.log('data in interceptor', data);
            
            return plainToClass(this.dto, data, {excludeExtraneousValues: true}); // excludeExtraneousValues will only return the properties that are defined as Exposed in the DTO
        }))
    }
}