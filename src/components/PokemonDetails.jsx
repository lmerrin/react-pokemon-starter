export default function PokemonDetails({ name, icon, type, desription }) {
  return (
    <div className="selected-pokemon-card">
      <h2>{name}</h2>
      <p>Type:{type}</p>
      <img className="selected-pokemon-pic" src={icon} alt="" />
      <p>Description:{desription}</p>
    </div>
  );
}
