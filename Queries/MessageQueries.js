import { gql } from "apollo-boost";

export const SEE_ROOMS = gql`
  {
    seeRooms {
      id
      participants {
        id
        avatar
        name
        firstName
        lastName
      }
      messagess {
        id
        text
        # from {
        #   id
        #   name
        #   avatar
        # }
        # to {
        #   id
        #   name
        #   avatar
        # }
      }
    }
  }
`;
