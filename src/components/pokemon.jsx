import React from "react";

export function Pokemon({ pokemon }) {
  return (
    <div className="pokemon relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        
      <div className="pokemon__name p-4 text-center">
       
        <p className="text-xl font-bold">{pokemon.name}</p>
      </div>
      <div className="pokemon__meta flex justify-around p-2">
        <span className="text-sm"> {pokemon.maxHP}</span>
        <span className="text-sm"> {pokemon.maxCP}</span>
      </div>
      <div className="pokemon__image p-4">
        <img src={pokemon.image} alt={pokemon.name} className="mx-auto" />
      </div>
      <div className="pokemon__attacks p-4">
        {pokemon.attacks.special.slice(0, 3).map((attack) => (
          <span
            key={`${attack.name}-${attack.damage}`}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {attack.name}
          </span>
        ))}
      </div>
    </div>
  );
}
