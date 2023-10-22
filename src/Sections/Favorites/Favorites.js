import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useState } from "react";
import "./Favorites.css";
import { useFavorites } from "../../Hooks/useFavorite";
import AOS from "aos";
import "aos/dist/aos.css";
import FavoritesCard from "../../Components/FavoritesCard/FavoritesCard";
import { Button } from "../../Components";
AOS.init();
const Favourites = memo(() => {
  const [favorites, setAddRemovFavorites] = useFavorites("favorites");
  const [isDisplay, setIsDisplay] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setIsDisplay((prev) => !prev);
        }}
        className=" flex items-center gap-3 text-[#2b2f32] text-[#ffffff] hover:text-[#fcf903] cursor-pointer"
      >
        <div className="relative">
          <FontAwesomeIcon
            icon="heart"
            className="w-[25px] h-[25px] pt-[5px]"
          />
          <span className="bg-[#fd4b6b] rounded-[50%] text-[#fff] inline-block text-[12px] font-[600] absolute right-[-12px] text-center top-[-5px] w-[21px] h-[21px]">
            {favorites.length}
          </span>
        </div>
        <span className="text-[#fff] hover:text-[#fcf903] font-[500] text-[23px] capitalize">
          Favourites
        </span>
      </div>
      {isDisplay && (
        <div className="favWrapper" data-aos="fade-left">
          <div className="favHeader">
            <h3 className="favTitle text-xl">Favourite List</h3>
            <span
              className="hamburger"
              onClick={() => setIsDisplay((prev) => !prev)}
            >
              <FontAwesomeIcon icon="xmark" />
            </span>
          </div>
          <div className="scrollable">
            {favorites.length > 0 &&
              favorites.map((pokemone, index) => (
                <FavoritesCard pokemon={pokemone} key={index} />
              ))}
          </div>
          <Button
           value="Close"
            onClick={() => setIsDisplay((prev) => !prev)}
          />
        </div>
      )}
    </>
  );
});
export default Favourites;
