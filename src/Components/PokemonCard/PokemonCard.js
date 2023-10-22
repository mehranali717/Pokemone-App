import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetPokemonByNameQuery } from "../../Redux/Apis/ApiSlice";
import { useFavorites } from "../../Hooks/useFavorite";

const PokemonCard =({pokemone})=> {
    const [favorites, setAddRemovFavorites] = useFavorites("favorites");
    const {data:PokemonData, isLoading:pokemoneLoading} = useGetPokemonByNameQuery(pokemone);
    if(pokemoneLoading) {
        return "isLoading";
    }
    const isFavorite = favorites.some((favorite) => favorite.name === PokemonData.name);
    return  <div className="border  p-[20px] rounded-lg bg-[#f0f0f0] shadow-xl   w-[400px]">
                <div className="px-2 py-4">
                <div className="flex justify-between items-center text-[22px] text-[#333] font-sans font-bold capitalize gap-x-[20px]">
                    <h2 className="block "> {PokemonData.name}</h2>
                    <FontAwesomeIcon
                    onClick={()=>setAddRemovFavorites(PokemonData)}
                    icon="heart"
                    className={`float-right cursor-pointer w-[27px] h-[27px] ${isFavorite ? 'text-[red]' : 'text-gray-500'}`}/>
                </div>
                <div
                    className="my-[30px] mx-auto w-[150px] h-[150px] 
                        p-[5px] bg-white shadow-xl
                        rounded-full"
                >
                    <img
                    className="w-full h-full"
                    src={PokemonData.sprites.front_default}
                    alt={PokemonData?.name}
                    />
                </div>
                <div className="py-[20px] border-b flex border-b-[#4f4f4f] justify-between">
                    <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
                    Weight
                    </h3>
                    <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
                    {PokemonData.weight}lbs
                    </p>
                </div>
                <div className="py-[20px] flex justify-between">
                    <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold">
                    Height
                    </h3>
                    <p className="block text-center text-[18px] text-[#333] font-sans font-bold">
                    {PokemonData.height}cm
                    </p>
                </div>
                </div>
                <button
                // onClick={() => onClick(PokemonData.name)}
                className="bg-[#111827] hover:bg-[#F6BD0E] text-white font-bold py-2 px-5 rounded-lg text-base mx-auto my-2 transition-colors duration-300 block"
                >
                View Details
                </button>
  </div>
}
export default PokemonCard;