import { gql } from "apollo-boost";

export const SEARCH_BY_USER = gql`
  query searchByUser($name: String!) {
    searchByUser(name: $name) {
      name
      avatar
      firstName
      lastName
    }
  }
`;

export const SEARCH_BY_POST = gql`
  query searchByPost($title: String!) {
    searchByPost(title: $title) {
      files {
        url
        id
      }
      user {
        avatar
        name
      }
      caption
      location
    }
  }
`;
