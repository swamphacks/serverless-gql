import { ApolloServer, gql } from 'apollo-server-lambda';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/dev/graphql',
  },
});

const graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});

export { graphqlHandler };
