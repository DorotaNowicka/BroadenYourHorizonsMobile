import { gql } from "@apollo/client";

const GET_DETAILS = gql`
  query GetDatails($countryCodes: [String!]) {
    countries(filter: { code: { in: $countryCodes } }) {
      name
      code
      continent {
        name
      }
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

export default GET_DETAILS;
