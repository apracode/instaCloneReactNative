import { gql } from "apollo-boost";

export const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      createdAt
      user {
        id
        avatar
        name
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        # user {
        #   id
        #   name
        # }
      }
    }
  }
`;
