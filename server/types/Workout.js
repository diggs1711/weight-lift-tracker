"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_cloud_functions_1 = require("apollo-server-cloud-functions");
const Workout = apollo_server_cloud_functions_1.gql `
	extend type Query {
		Workouts: [Workout!]
	}

	type Workout {
		date: String
		name: String
		exercises: [Exercise!]
	}

	type Exercise {
		name: String
		weight: Int
		repitions: Int
	}
`;
exports.default = Workout;
