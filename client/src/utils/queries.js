import { gql } from '@apollo/client';

// export const GET_USER_DATA = gql`
// query Query($username: String!) {
//   user(username: $username) {
//     thoughts {
//       _id
//       location
//       departure
//     }
// }`

export const ME = gql ` 
query Query {
  me {
    _id
    username
    email
    password
    thoughts {
      _id
      location
      departure
    }
  }
}`