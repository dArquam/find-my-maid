import { createParamDecorator, ExecutionContext } from "@nestjs/common";


//Param Decorator can't access the services directly as it is not part of the dependency injection system of NestJS
//so we gonna create a interceptor that deals with the logic of fetching the user from the database
export const CurrentProfile = createParamDecorator((data: never, context: ExecutionContext)=>{
    const request = context.switchToHttp().getRequest();
    
    
    return request.user;
})