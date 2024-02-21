import PokemonCard from "./PokemonCard";

export default function PokemonCardCollection({ pokidex, onPokemonCardClick }) {
  return (
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
                onPokemonCardClick(pokemon);
              }}
            />
          );
        })}
    </div>
  );
}
