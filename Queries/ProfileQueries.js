import { gql } from "apollo-boost";

export const SEE_PROFILE = gql`
  query seeProfile($id: String!) {
    seeProfile(id: $id) {
      user {
        id
        name
        firstName
        lastName
        avatar
        followers {
          id
        }
        following {
          id
        }
      }
      posts {
        id
      }
    }
  }
`;

export const SEE_MY_PROFILE = gql`
  query myProfile {
    myProfile {
      user {
        id
        name
        firstName
        lastName
      }
      posts {
        id
      }
    }
  }
`;
