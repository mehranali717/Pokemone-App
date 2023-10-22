import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFavorites } from "../../Hooks/useFavorite";
import Image from "../Image/Image";

const FavoritesCard =({pokemon})=> {
    const [favorites, setAddRemovFavorites] = useFavorites("favorites");
   return <div className="favBody flex items-center justify-between">
              <div className="w-24 h-24 mb-3 rounded-full shadow-xl">
                  <Image image={pokemon.sprites.front_default}/>
              </div>
              <div className="flex flex-col">
                <span className="mb-1 text-md font-medium text-gray-900 dark:text-[#2f2f2f] capitalize">
                  {pokemon.name}
                </span>
                <span className="text-sm dark:text-[#2f2f2f] capitalize">
                  {pokemon.types[0].type.name}
                </span>
                <span className="text-sm dark:text-[#2f2f2f]">
                  {toKilograms(pokemon.weight)} Kg
                </span>
                <span className="text-sm dark:text-[#2f2f2f]">
                  {toCentimeters(pokemon.height)} Cm
                </span>
              </div>
              <FontAwesomeIcon
                onClick={()=>setAddRemovFavorites(pokemon)}
                icon="heart"
                className={`text-[red] cursor-pointer w-[27px] h-[27px] self-start`}
              />
            </div>
}
export default FavoritesCard;
const toKilograms = (hg) => {
    return hg / 10;
  };
  const toCentimeters = (val) => {
    return val * 10;
  };