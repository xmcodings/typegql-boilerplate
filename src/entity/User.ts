import { Field, ObjectType, ID } from "type-graphql";
import { 
    Column,
    Entity,
//    JoinColumn,
//    ManyToOne,
//    OneToMany,
    BaseEntity,
    CreateDateColumn,
//    DeleteDateColumn,
//    PrimaryColumn,
    PrimaryGeneratedColumn,
 } from "typeorm";


/*
 entity는 graphql과 typeorm을 동시에 정의할 수 있는 강력한 방법
 db에 직접 접근하는 객체인 DAO에 해당
*/

 @ObjectType({
     description: "User 객체를 일반 사용자에게 공개할 때 사용되는 엔티티",
 })
 export class ResponseUser {
    @Field()
    nickname: string
    // @Field()
    // contribution: number
    @Field()
    createdAt: Date
 }

 @ObjectType({
     description: "Real User Object",
 })
 @Entity("user")
 export class User extends BaseEntity{
    
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    pw: string

    @Field()
    @Column()
    nickname: string

    @Field(() => Date)
    @CreateDateColumn({
        type: 'timestamp with time zone'
    })
    createdAt: Date
 }

