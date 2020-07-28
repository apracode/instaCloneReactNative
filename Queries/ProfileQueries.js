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
        bio
        amIFollowing
        followers {
          id
        }
        following {
          id
        }
      }
      posts {
        id
        files {
          id
          url
        }
        user {
          id
        }
        location
        caption
        likes {
          id
          user {
            id
          }
          post {
            id
          }
        }
        comments {
          id
          text
          user {
            id
            name
          }
          post {
            id
          }
        }
        isLiked
        likeCount
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
        avatar
        bio
        amIFollowing
        followers {
          id
        }
        following {
          id
        }
      }
      posts {
        id
        user {
          id
        }
        files {
          id
          url
        }
        location
        caption
        likes {
          id
          user {
            id
          }
          post {
            id
          }
        }
        comments {
          id
          text
          user {
            id
            name
          }
          post {
            id
          }
        }
        isLiked
        likeCount
      }
    }
  }
`;
