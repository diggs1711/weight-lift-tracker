"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_cloud_functions_1 = require("apollo-server-cloud-functions");
const schema_1 = __importDefault(require("./schema"));
const server = new apollo_server_cloud_functions_1.ApolloServer({
    schema: schema_1.default,
    playground: true,
    introspection: true
});
exports.handler = server.createHandler();
