import { gql } from "apollo-boost";

export const TOGGLE_LIKE = gql`
  mutation toggleLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;

export const UPLOAD_POST = gql`
  mutation uploadPost($caption: String, $files: [String!]!, $location: String) {
    uploadPost(caption: $caption, files: $files, location: $location) {
      id
      files{
        url
      }
    }
  }
`;
