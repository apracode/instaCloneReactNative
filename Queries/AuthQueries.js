import { gql} from "apollo-boost";

export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CONFIRM = gql`
  mutation confirmSecret($secret: String!, $email: String!) {
    confirmSecret(secret: $secret, email: $email)
  }
`;

export const SIGN_UP = gql`
  mutation createAccount(
    $name: String!
    $email: String!
    $firstName: String
    $lastName: String
    $bio: String
  ) {
    createAccount(
      name: $name
      email: $email
      firstName: $firstName
      lastName: $lastName
      bio: $bio
    ){
      id
      name
      email
    }
  }
`;
