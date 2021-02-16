import { InputType, Field } from "type-graphql";
// import { 
//     IsByteLength,
//     IsEmail,
//     IsEmpty,
// } from "class-validator";


@InputType({description: "유저 생성을 위한 Input"})
export class CreateUserInput{

    @Field()
    nickname: string

    @Field()
    pw: string
}