import { ApolloServer, gql } from 'apollo-server-cloud-functions';
import schema from './schema'

const server = new ApolloServer({
    schema: schema,
    playground: true,
    introspection: true
})

exports.handler = server.createHandler()