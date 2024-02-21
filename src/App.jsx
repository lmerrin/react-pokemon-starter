import { useState } from "react";
import PokemonCard from "./PokemonCard";
import pokidexEntries from "./pokemon";

import "./App.css";
import PokemonDetails from "./PokemonDetails";

function App() {
  const [pokidex, setPokidex] = useState(pokidexEntries);
  let [selectedPokemon, setSelectedPokemon] = useState(pokidex[0]);

  return (
    <main className="main-container">
      <h1 className="page-header">React Pokidex</h1>

      <div className="selected-pokemon-container">
        <PokemonDetails
          name={selectedPokemon.name}
          type={selectedPokemon.type}
          icon={selectedPokemon.icon}
          desription={selectedPokemon.description}
        />
      </div>

      <div className="pokemon-cards-container">
        {pokidex &&
          pokidex.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                icon={pokemon.icon}
                typeIcon={pokemon.typeIcon}
                onClickHandler={() => {
                  setSelectedPokemon(pokemon);
                }}
              />
            );
          })}
      </div>
    </main>
  );
}

export default App;