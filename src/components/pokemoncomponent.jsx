import React from "react";
import { useQuery } from "@apollo/client";
import { Pokemon } from "./pokemon"; // Adjust the import path as necessary
import GET_POKEMONS from "../graphql/getpokemons"; // Adjust the import path as necessary

function PokemonsContainer() {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: { first: 9 },
    });

    if (loading) return<div className="wrapper">
    <div className="pokeball">
    </div>
  </div>
    if (error) return <p>Error: {error.message}</p>;

    const pokemons = data?.pokemons || [];

    return (
        <div className="container">
            
            {pokemons.map((pokemon) => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
}

export default PokemonsContainer;
