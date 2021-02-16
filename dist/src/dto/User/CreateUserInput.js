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
exports.CreateUserInput = void 0;
const type_graphql_1 = require("type-graphql");
// import { 
//     IsByteLength,
//     IsEmail,
//     IsEmpty,
// } from "class-validator";
let CreateUserInput = class CreateUserInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "nickname", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "pw", void 0);
CreateUserInput = __decorate([
    type_graphql_1.InputType({ description: "유저 생성을 위한 Input" })
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;
//# sourceMappingURL=CreateUserInput.js.map