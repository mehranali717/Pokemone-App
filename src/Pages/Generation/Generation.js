import { useLocation } from "react-router";
import { useGetPokemonByGenerationQuery } from "../../Redux/Apis/ApiSlice";
import { Button, PageTitle, PokemonCard } from "../../Components";
import Loader from "../../Components/Loader/Loader";
import { useState } from "react";
import { CardWrapper } from "../../Sections";

const Generation = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const perPage = 6;
  const name = location.state.name;
  const {
    data: pokemonByGeneration,
    isLoading,
    isSuccess,
    error:loadingError
  } = useGetPokemonByGenerationQuery(name, {page, perPage});
  const startIndex = (page - 1) * perPage;
  const lastIndex = startIndex + perPage;
  return (
    <div className="flex flex-col gap-y-5">
      <PageTitle title={name} />
      {isLoading && <Loader />}
      {loadingError && <h1 className="text-[red] font-bold text-[20px]">Error While Loading Data</h1>}
      {isSuccess && (
       <>
         <CardWrapper>
          {pokemonByGeneration.pokemon_species.length > 0 && pokemonByGeneration.pokemon_species.slice(startIndex, lastIndex).map((pokemone, index) => (
            <PokemonCard pokemone={pokemone.name} key={index} />
          ))}
        </CardWrapper>
        <div className="flex gap-x-5 justify-between self-end">
            {page > 1 && (
              <Button value="Prev" onClick={() => setPage(page - 1)} />
            )}
            <Button value="Next" onClick={() => setPage(page + 1)} />
        </div>
       </>
      )}
    </div>
  );
  };
export default Generation;