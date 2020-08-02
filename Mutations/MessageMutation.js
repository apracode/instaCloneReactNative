import { gql } from "apollo-boost";

export const SEND_MESSAGE = gql`
  mutation sendMessage($roomId: String, $message: String!, $to: String!) {
    sendMessage(roomId: $roomId, message: $message, to: $to) {
      id
      text
    }
  }
`;

export const NEW_MESSAGE = gql`
  subscription newMessage($roomId: String!) {
    newMessage(roomId: $roomId) {
      id
      text
    }
  }
`;
