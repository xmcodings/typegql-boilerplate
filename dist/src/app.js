"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import passport from "passport";
const database_1 = require("./database");
const resolver_1 = require("./resolver");
const type_graphql_1 = require("type-graphql");
const typedi_1 = __importDefault(require("typedi"));
function startServer(port) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.createDBConnection();
        // should build schema and resolver first!!\
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [resolver_1.UserResolver],
            validate: true,
            container: typedi_1.default,
        });
        const server = new apollo_server_express_1.ApolloServer({
            schema: schema,
        });
        const app = express_1.default();
        app.use(express_1.default.json());
        app.use(cookie_parser_1.default());
        //app.use(passport.initialize())
        server.applyMiddleware({ app, path: 'api/v2', cors: false });
        app.route('/').get((_, res) => {
            res.send();
        });
        const expressServer = app.listen(port, () => {
            console.log(`listen port ${port}`);
        });
        console.log(expressServer);
    });
}
exports.startServer = startServer;
//# sourceMappingURL=app.js.map