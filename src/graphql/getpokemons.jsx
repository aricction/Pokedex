import { gql } from '@apollo/client';

const GET_POKEMONS = gql`
  query GetPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      maxHP
      maxCP
      image
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;

export default GET_POKEMONS;
