import { User,ResponseUser } from "../entity"
import { Repository, EntityRepository /*, Brackets */ } from "typeorm";
import { SearchUserInput } from "../dto/User";




@EntityRepository(User)
export class UserRepository extends Repository<User>{
    
    public async searchUser(
        input: SearchUserInput
    ): Promise<ResponseUser[]>{
        const data = this.createQueryBuilder('user')
        if(input.startDate) 
            data.andWhere("user.createdAt > :startDate", {startDate : input.startDate})
        if(input.endDate) 
            data.andWhere("user.createdAt > :endDate", {endDate : input.endDate})
        if(input.nicksearch)    
            data.andWhere("user.nickname like :nickname", {nickname : input.nicksearch})
        //console.log(data);
        return await data.getMany();
    }
}
