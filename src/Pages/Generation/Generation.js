import { useLocation } from "react-router";
import { useGetPokemonByGenerationQuery } from "../../Redux/Apis/ApiSlice";
import { PokemonCard } from "../../Components";

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
      <div className="bg-[#f0f0f0] px-6 py-3 rounded-[10px]">
        <h2 className="text-[20px] text-[#555] font-[500] uppercase">
          {name}
        </h2>
      </div>
      {isLoading && <h1>Isloading</h1>}
      {isSuccess && (
        <div className="scrollable flex flex-wrap justify-between gap-y-10 heightScroable">
          {pokemonByGeneration.pokemon_species.map((pokemone, index) => (
            <PokemonCard pokemone={pokemone.name} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Generation;
