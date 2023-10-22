import { useLocation } from "react-router";
import { useGetPokemonByGenerationQuery } from "../../Redux/Apis/ApiSlice";
import { PageTitle, PokemonCard } from "../../Components";

const Generation = () => {
  const location = useLocation();
  const name = location.state.name;
  const {
    data: pokemonByGeneration,
    isLoading,
    isSuccess,
  } = useGetPokemonByGenerationQuery(name);
  if (isLoading) {
    return "Loading...";
  }
  return (
    <div className="flex flex-col gap-y-5">
      <PageTitle title={name} />
      {isLoading && <h1>Isloading</h1>}
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
