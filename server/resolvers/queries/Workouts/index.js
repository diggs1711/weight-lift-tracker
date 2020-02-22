"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Workouts_1 = __importDefault(require("./Workouts"));
exports.default = {
    Query: {
        Workouts: Workouts_1.default
    },
    Workout: () => {
        return {
            date: '1/1/1',
            name: 'Test',
            exercise: [
                {
                    name: 'Ex',
                    weight: 2,
                    repitions: 3
                }
            ]
        };
    },
    Exercise: () => {
        return "Hi";
    }
};
