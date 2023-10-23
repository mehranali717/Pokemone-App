import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetPokemonByNameQuery } from "../../Redux/Apis/ApiSlice";
import { useFavorites } from "../../Hooks/useFavorite";
import Button from "../Button/Button";
import Image from "../Image/Image";
import { useNavigate } from "react-router";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { handleAddRemove } from "../../Redux/FavoriteSlice/FavoriteSlice";

const PokemonCard = ({ pokemone, page="" }) => {
  const [favorites, setAddRemovFavorites] = useFavorites("favorites");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: PokemonData, isLoading: pokemoneLoading, error:loadingError, isSuccess:loaded } =
    useGetPokemonByNameQuery(pokemone);
  if (pokemoneLoading) {
    return <Loader />;
  }
  const isFavorite = favorites.some(
    (favorite) => favorite.name === PokemonData.name
  );
    const imageSrcs = [
      PokemonData.sprites?.back_default,
      PokemonData.sprites?.back_shiny,
      PokemonData.sprites?.front_default,
      PokemonData.sprites?.front_shiny,
    ];
  const viewDetailHandler =(name)=> {
        navigate(`/detail/${name}`,{
            state: {
                name: name,
              },
        });
  }
  return (
    <>
    {loadingError && <h1 className="text-[red] font-bold text-[20px]">Error While Loading Data</h1>}
    {(loaded && PokemonData) && <div className="border  p-[20px] rounded-lg bg-[#f0f0f0] shadow-xl   w-[400px]">
      <div className="px-2 py-4">
        <div className="flex justify-between items-center text-[22px] text-[#333] font-sans font-bold capitalize gap-x-[20px]">
          <h2 className="block "> {PokemonData.name}</h2>
          <FontAwesomeIcon
            onClick={() => {setAddRemovFavorites(PokemonData);dispatch(handleAddRemove(prev=>!prev))}}
            icon="heart"
            className={`float-right cursor-pointer w-[27px] h-[27px] ${
              isFavorite ? "text-[red]" : "text-gray-500"
            }`}
          />
        </div>
        <div
          className="my-[30px] mx-auto w-[150px] h-[150px] 
                        p-[5px] bg-white shadow-xl
                        rounded-full"
        >
          <Image image={PokemonData.sprites?.front_default} />
        </div>
        <div className="py-[20px] border-b flex justify-between">
          <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold capitalize">
            Height
          </h3>
          <span className="block text-center text-[18px] text-[#333] font-sans font-bold">
            {toCentimeters(PokemonData.height)}cm
          </span>
        </div>
        <div className="py-[20px] flex justify-between">
          <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold capitalize">
            Weight
          </h3>
          <span className="block text-center text-[18px] text-[#333] font-sans font-bold">
            {toKilograms(PokemonData.weight)} kg
          </span>
        </div>
        {(page === "detail" || page === "comparison" )&& <>
        <div className="py-[20px] border-b">
          <h3 className="block pb-[15px] text-center text-[18px] text-[#333] font-sans font-bold">
            Types
          </h3>
          <ul className="flex justify-center gap-x-[10px] ">
            {PokemonData.types.map((type, index) => (
              <li
                key={index}
                className="px-[18px] py-[8px] font-bold text-[#111827] border-2 border-[#111827] rounded-full capitalize"
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-[20px] border-b">
          <h3 className="block text-center pb-[15px] text-[18px] text-[#333] font-sans font-bold">
            Abilities
          </h3>
          <ul className="flex justify-center gap-x-[10px]">
            {PokemonData.abilities.map((ability, index) => (
              <li
                key={index}
                className="px-[18px] py-[8px] font-bold text-[#111827] border-2 border-[#111827] rounded-full capitalize"
              >
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-[20px] border-b">
          <h3 className="block text-center pb-[15px] text-[18px] text-[#333] font-sans font-bold capitalize">
            Different Views
          </h3>
          <ul className="flex justify-center gap-x-[10px]">
            {imageSrcs.map((src) => (
              <li
                className="my-[30px] mx-auto w-[70px] h-[70px] p-[10px]
                        bg-white shadow-xl flex justify-center items-center
                        rounded-full"
              >
                <Image image={src} />
              </li>
            ))}
          </ul>
        </div>
        <div className="py-[20px] border-b flex justify-between">
          <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold capitalize">
            Base Experience
          </h3>
          <span className="block text-center text-[18px] text-[#333] font-sans font-bold">
            {PokemonData.base_experience}
          </span>
        </div>
        <div className="py-[20px] border-b flex justify-between">
          <h3 className="block text-center text-[18px] text-[#333] font-sans font-bold capitalize">
            Order
          </h3>
          <span className="block text-center text-[18px] text-[#333] font-sans font-bold">
            {PokemonData.order}
          </span>
        </div>
        </>}
      </div>
      {((page !== "detail") && (page !== "comparison" ))&&<Button value="View Details" onClick={()=>viewDetailHandler(PokemonData.name)}/>}
    </div>}
    </>
    
  );
};
export default PokemonCard;

const toKilograms = (lbs) => {
    return lbs / 10;
  };
  const toCentimeters = (val) => {
    return val * 10;
  };
