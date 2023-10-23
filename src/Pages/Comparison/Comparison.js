import Select from 'react-select'
import { useGetAllPokemonQuery } from '../../Redux/Apis/ApiSlice';
import "./Comparison.css"
import { useState } from 'react';
import { PokemonCard } from '../../Components';

const Comparison = () => {
    const [pokemon1ToSearch, setPokemone1ToSearch] = useState("");
    const [pokemon2ToSearch, setPokemone2ToSearch] = useState("");
    const {data:AllPokemone, isLoading:PokemonLoading, error:loadingError, isSuccess } = useGetAllPokemonQuery("");
    if(PokemonLoading) {
        return "Loading..."
    }
    const options = AllPokemone.results.map(pokemon => ({
        label: pokemon.name,
        value: pokemon.name
      }));
return (
    <div className='flex flex-col gap-5'>
      <div className=" bg-[#f0f0f0] px-6 py-3 rounded-[10px] min-w-[400px] flex justify-between">
        {isSuccess && <>
            <Select className='hideScrollLines w-[400px] capitalize text-[16px] font-[500]' options={options} onChange={(e)=>setPokemone1ToSearch(e.value)}/>
            <Select className='hideScrollLines w-[400px] capitalize text-[16px] font-[500]' options={options} onChange={(e)=>setPokemone2ToSearch(e.value)}/>
        </>}
      </div>
      <div className='flex justify-between'>
        {pokemon1ToSearch && <PokemonCard pokemone={pokemon1ToSearch} page='comparison'/>}
        {pokemon2ToSearch && <PokemonCard pokemone={pokemon2ToSearch} page='comparison'/>}
      </div>
    </div>
  );
};
export default Comparison;
