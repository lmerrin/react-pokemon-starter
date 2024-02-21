import { useState } from "react";
import pokidexEntries from "./pokemon";
import PokemonCardCollection from "./components/PokemonCardCollection";

import "./App.css";
import PokemonDetails from "./components/PokemonDetails";

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

      <PokemonCardCollection
        pokidex={pokidex}
        onPokemonCardClick={setSelectedPokemon}
      />
    </main>
  );
}

export default App;
