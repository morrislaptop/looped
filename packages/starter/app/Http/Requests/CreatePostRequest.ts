import { IsString, IsEmail } from "class-validator";

export class CreatePostRequest {

    @IsString()
    title: string

    @IsEmail()
    email: string

}
