import { useState } from "react";
import { PokemonCard } from "../../Components";
import { useGetPokemonByPageQuery } from "../../Redux/Apis/ApiSlice";
import "./Home.css";

const Home = () => {
  const [page, setPage] = useState(1);
  const [pokemoneToSearch, setPokemoneToSearch] = useState("");
  const { data: Pokemones, isLoading } = useGetPokemonByPageQuery(page);
  if (isLoading) {
    return "Loading...";
  }
  console.log({Pokemones});
  const handleFilter =(name)=> {
    // debugger
   const pokemon = Pokemones.results.find((pokemone)=>pokemone.name.trim().toLowerCase() === name.trim().toLowerCase())
    setPokemoneToSearch(pokemon.name);
  }
  return (
    <div className="flex flex-col gap-y-5">
      <div className="bg-[#f0f0f0] px-6 py-3 rounded-[10px] flex justify-between items-center">
        <h2 className="text-[20px] text-[#555] font-[500] uppercase">
          Pokemons
        </h2>
        <input onChange={(e)=>handleFilter(e.target.value)}/>
      </div>
      <div className="flex justify-center">
      {pokemoneToSearch ? (
        <PokemonCard pokemone={pokemoneToSearch} />
      ) : (
        <div className="flex flex-col gap-5">
          <div className="scrollable flex flex-wrap justify-between gap-y-10 heightScroable">
          {Pokemones.results.map((pokemone) => (
            <PokemonCard pokemone={pokemone.name} />
          ))}
        </div>
        <div className="flex gap-x-5 justify-between self-end">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="self-center text-white text-[20px] font-bold bg-[#111827] px-4 px-1 rounded-[5px]"
          >
            Prev
          </button>
        )}
        <button
          onClick={() => setPage(page + 1)}
          className="self-center text-white text-[20px] font-bold bg-[#111827] px-4 px-1 rounded-[5px] self-end"
        >
          Next
        </button>
      </div>
        </div>
      )}
      </div>
      
    </div>
  );
};
export default Home;
