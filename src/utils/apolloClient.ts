import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://dev-backend.inmap.app/graphql",
  cache: new InMemoryCache(),
});
