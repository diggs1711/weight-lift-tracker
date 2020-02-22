import { makeExecutableSchema, gql } from "apollo-server-cloud-functions"
import Workout from './types/Workout'
import WorkoutsQueries from './resolvers/queries/Workouts'

import { merge } from 'lodash'
const base = gql`
    type Query {
        dummy: String
    }

    type Mutation {
        dummy: String
    }
`

const resolvers = merge(
    {},
    WorkoutsQueries
)

const schema = makeExecutableSchema({
    typeDefs: [
        base,
        Workout
    ],
    resolvers
})


export default schema