import { useLocation } from "react-router";
import { useGetPokemonByGenerationQuery } from "../../Redux/Apis/ApiSlice";
import { PageTitle, PokemonCard } from "../../Components";
import Loader from "../../Components/Loader/Loader";

const Generation = () => {
  const location = useLocation();
  const name = location.state.name;
  const {
    data: pokemonByGeneration,
    isLoading,
    isSuccess,
    error:loadingError
  } = useGetPokemonByGenerationQuery(name);

  return (
    <div className="flex flex-col gap-y-5">
      <PageTitle title={name} />
      {isLoading && <Loader />}
      {loadingError && <h1 className="text-[red] font-bold text-[20px]">Error While Loading Data</h1>}
      {isSuccess && (
        <div className="scrollable flex flex-wrap justify-between gap-y-10 scrollablePokemoneOuter">
          {pokemonByGeneration.pokemon_species.map((pokemone, index) => (
            <PokemonCard pokemone={pokemone.name} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Generation;
