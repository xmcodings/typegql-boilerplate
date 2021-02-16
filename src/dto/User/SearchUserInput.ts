import { InputType, Field } from "type-graphql";

@InputType()
export class SearchUserInput{

    @Field({nullable: true})
    nicksearch?: string

    @Field({nullable: true})
    startDate?: Date

    @Field({nullable: true})
    endDate?: Date

}