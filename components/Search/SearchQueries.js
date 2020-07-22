import { gql } from "apollo-boost";

export const SEARCH_BY_USER = gql`
  query searchByUser($name: String!) {
    searchByUser(name: $name) {
      name
    }
  }
`;
