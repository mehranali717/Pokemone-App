import { useLocation } from "react-router";
import { PageTitle, PokemonCard } from "../../Components";

const PokemoneDetail = () => {
  const location = useLocation();
  const name = location.state.name;

  return (
    <div className="flex flex-col gap-y-5">
        <PageTitle title="Discreption"/>
        <div className="flex justify-center">
        <PokemonCard pokemone={name} page="detail" />
        </div>
    </div>
  );
};
export default PokemoneDetail;
