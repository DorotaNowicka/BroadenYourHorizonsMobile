import { gql } from "@apollo/client";

const GET_COUNTRIES_BY_CONTINENT = gql`
  query GetCountriesByContinent($continentCode: String!) {
    countries(filter: { continent: { eq: $continentCode } }) {
      code
    }
  }
`;

export default GET_COUNTRIES_BY_CONTINENT;
