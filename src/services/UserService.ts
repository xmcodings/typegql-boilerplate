import { Service } from "typedi";
import { User } from "../entity/User";
import { CreateUserInput, SearchUserInput } from "../dto/User";
import { InjectRepository } from "typeorm-typedi-extensions";
import { UserRepository } from "../repository/UserRepository";



@Service()
export class UserService{

    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository
    ){
        console.log("user service created");
        console.log(this.userRepository);
        
        this.createUser = this.createUser.bind(this);
        this.searchUser = this.searchUser.bind(this);
    }


    public async createUser(input: CreateUserInput) {
        const newUser = new User();
        newUser.nickname = input.nickname;
        newUser.pw = input.pw;

        console.log(newUser);
        return await newUser.save();
    }

    public async test(number: Number){
        console.log(number);
    }

    public async searchUser(
        input: SearchUserInput
    ):Promise<Partial<User>[]> {
        const usersearch = await this.userRepository.searchUser({
            nicksearch: input.nicksearch,
            startDate: input.startDate,
            endDate: input.endDate
        })
        console.log(usersearch);
        return usersearch;
    }
}