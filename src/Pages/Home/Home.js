import { useCallback, useState } from "react";
import { Button, Input, PageTitle, PokemonCard } from "../../Components";
import { useGetPokemonByPageQuery } from "../../Redux/Apis/ApiSlice";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const [page, setPage] = useState(1);
  const [searched, setSearched] = useState(false);
  const [pokemoneToSearch, setPokemoneToSearch] = useState([]);
  const {
    data: Pokemones,
    isLoading,
    isSuccess,
    error: loadingError,
  } = useGetPokemonByPageQuery(page);
  const handleFilter = useCallback((e) => {
    const name = e.target.value;
    if(name !==""){
      const pokemon = Pokemones.results.filter((pokemone) =>
      pokemone.name.trim().toLowerCase().includes(name.trim().toLowerCase())
    )
    if (pokemon.length > 0) {
      setPokemoneToSearch(pokemon);
    } else if (pokemon.length === 0 && name) {
      setSearched(true);
      setPokemoneToSearch([]);
    }
    }
    else if (name === "") {
      setSearched(false);
      setPokemoneToSearch([]);
    }
    
  }, [Pokemones]);
  return (
    <>
      {isLoading && <Loader />}
      {loadingError && (
        <h1 className="text-[red] font-bold text-[20px]">
          Error While Loading Data
        </h1>
      )}
      {isSuccess && (
        <div className="flex flex-col gap-y-5">
          <div className="flex justify-between items-center">
            <PageTitle title="Pokemon" />
            <Input
              onChange={handleFilter}
              placeholder="Search..."
            />
          </div>
          {pokemoneToSearch.length > 0 || searched ? (
            <div className="flex flex-col gap-5">
              <div className="scrollable flex flex-wrap justify-between gap-y-10">
                {pokemoneToSearch.length > 0 ? (
                  pokemoneToSearch.map((pokemone, index) => (
                    <PokemonCard pokemone={pokemone.name} key={index} />
                  ))
                ) : (
                  <h1 className="text-[red] text-[25px] ">Record Not Found:</h1>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <div className="scrollable flex flex-wrap justify-between gap-y-10">
                {Pokemones && Pokemones.results.length > 0 &&
                  Pokemones.results.map((pokemone, index) => (
                    <PokemonCard pokemone={pokemone.name} key={index} />
                  ))}
              </div>
              <div className="flex gap-x-5 justify-between self-end">
                {page > 1 && (
                  <Button value="Prev" onClick={() => setPage(page - 1)} />
                )}
                <Button value="Next" onClick={() => setPage(page + 1)} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Home;
