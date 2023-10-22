import { useState } from "react";
import { PokemonCard } from "../../Components";
import { useGetPokemonByPageQuery } from "../../Redux/Apis/ApiSlice";
import "./Home.css"

const Home =()=> {
    const [page, setPage] = useState(1);
    const {data:Pokemones, isLoading} = useGetPokemonByPageQuery(page);
    if(isLoading) {
        return "Loading..."
    }
    return <div className="flex flex-col gap-y-5">
                <div className="bg-[#f0f0f0] px-6 py-3 rounded-[10px]"><h2 className="text-[20px] text-[#555] font-[500] uppercase">Pokemons</h2></div>
                <div className="scrollable flex flex-wrap justify-between gap-y-10 heightScroable">
                    {Pokemones.results.map((pokemone)=><PokemonCard pokemone={pokemone.name}/>)}
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
}
export default Home;