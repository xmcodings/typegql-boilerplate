"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.ResponseUser = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
/*
 entity는 graphql과 typeorm을 동시에 정의할 수 있는 강력한 방법
 db에 직접 접근하는 객체인 DAO에 해당
*/
let ResponseUser = class ResponseUser {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ResponseUser.prototype, "nickname", void 0);
ResponseUser = __decorate([
    type_graphql_1.ObjectType({
        description: "User 객체를 일반 사용자에게 공개할 때 사용되는 엔티티",
    })
], ResponseUser);
exports.ResponseUser = ResponseUser;
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "pw", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "nickname", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.CreateDateColumn({
        type: 'timestamp with time zone'
    }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
User = __decorate([
    type_graphql_1.ObjectType({
        description: "Real User Object",
    }),
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=User.js.map