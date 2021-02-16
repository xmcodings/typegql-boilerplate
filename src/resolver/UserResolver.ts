import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User, ResponseUser } from "../entity/User";
import { CreateUserInput, SearchUserInput } from "../dto/User";
import { UserService } from "../services/UserService";
import { Service } from "typedi";
//import { UserRepository } from "repository/UserRepository";



@Resolver()
@Service()
export class UserResolver{

    constructor(
        private readonly userService : UserService
    ){
        console.log("hi user resolver");
    }

    @Query(() => String)
    hello(){
        return "hello";
    }
    
    @Query(() => [ResponseUser], {description: "가입날짜나 닉네임을 통해 유저 검색"})
    public async users(
        @Arg("input", {nullable: true}) input?: SearchUserInput
    ):Promise<Partial<User>[]> {
        return await this.userService.searchUser(input);
    }


    @Mutation(()=> User)
    public async createUser(
        @Arg('CreateUserInput') CreateUserInput: CreateUserInput,
    ): Promise<User> {
        
        const created = await this.userService.createUser(CreateUserInput);
        console.log(created);
        return created;        
    }
    
}