import { useLocation } from "react-router";
import { PokemonCard } from "../../Components";

const PokemoneDetail = () => {
  const location = useLocation();
  const name = location.state.name;

  return (
    <div className="flex justify-center">
      <PokemonCard pokemone={name} page="detail" />
    </div>
  );
};
export default PokemoneDetail;
