import { ApolloServer } from "apollo-server-express";
import express from "express";
import cookieParser from "cookie-parser";
// import passport from "passport";
import { createDBConnection } from "./database";
import * as Resolver from './resolver'
import { buildSchema } from "type-graphql";
import Container from "typedi";
import { UserService } from "./services";
import { UserRepository } from "./repository";

type resolver = typeof Resolver[keyof typeof Resolver]

export async function startServer(port: Number){

    const a = await createDBConnection();
    
    // should build schema and resolver first!!\

    const resolvers = Object.values(Resolver) as [resolver, ...resolver[]]

    console.log(resolvers);
    //console.log(Container.get(UserService).test(3));
    
    
    const schema = await buildSchema({
        resolvers,
        validate: true,
        container: Container,
    })
    
    

    const server = new ApolloServer({
        schema: schema,
    })
    


    const app = express();
    app.use(express.json());
    app.use(cookieParser());
    //app.use(passport.initialize())

    
    server.applyMiddleware({ app, path: '/api/v2', cors: false});

    app.route('/').get((_, res) =>{
        res.send("hi");
    })

    app.listen(port, () =>{
        console.log(`listen port ${port}`);
    })
    //console.log(expressServer);
    
}



