import { useState } from "react";
import { Button, Input, PageTitle, PokemonCard } from "../../Components";
import { useGetPokemonByPageQuery } from "../../Redux/Apis/ApiSlice";
import "./Home.css";

const Home = () => {
  const [page, setPage] = useState(1);
  const [pokemoneToSearch, setPokemoneToSearch] = useState("");
  const { data: Pokemones, isLoading } = useGetPokemonByPageQuery(page);
  if (isLoading) {
    return "Loading...";
  }
  const handleFilter =(name)=> {
   const pokemon = Pokemones.results.find((pokemone)=>pokemone.name.trim().toLowerCase() === name.trim().toLowerCase())
    setPokemoneToSearch(pokemon.name);
  }
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex justify-between items-center">
        <PageTitle title="Pokemon"/>
        <Input onChange={(e)=>handleFilter(e.target.value)}/>
      </div>
      <div className="flex justify-center">
      {pokemoneToSearch ? (
        <PokemonCard pokemone={pokemoneToSearch} />
      ) : (
        <div className="flex flex-col gap-5">
          <div className="scrollable flex flex-wrap justify-between gap-y-10 scrollablePokemoneOuter">
          {Pokemones.results.map((pokemone, index) => (
            <PokemonCard pokemone={pokemone.name} key={index}/>
          ))}
        </div>
        <div className="flex gap-x-5 justify-between self-end">
        {page > 1 && (
          <Button value="Prev" onClick={()=>setPage(page-1)}/>
        )}
        <Button value="Next" onClick={()=>setPage(page +1)}/>
      </div>
        </div>
      )}
      </div>
      
    </div>
  );
};
export default Home;
