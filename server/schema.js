"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_cloud_functions_1 = require("apollo-server-cloud-functions");
const Workout_1 = __importDefault(require("./types/Workout"));
const Workouts_1 = __importDefault(require("./resolvers/queries/Workouts"));
const lodash_1 = require("lodash");
const base = apollo_server_cloud_functions_1.gql `
    type Query {
        dummy: String
    }

    type Mutation {
        dummy: String
    }
`;
const resolvers = lodash_1.merge({}, Workouts_1.default);
const schema = apollo_server_cloud_functions_1.makeExecutableSchema({
    typeDefs: [
        base,
        Workout_1.default
    ],
    resolvers
});
exports.default = schema;
