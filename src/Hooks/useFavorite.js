import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export function useFavorites(key) {
  const [favorites, setFavorites] = useState([]);
  const favItem = useSelector((state)=>state.handleAddRemove.isTrue);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(key);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [key, favItem]);
  const setAddRemovFavorites = (item) => {
    let data = JSON.parse(localStorage.getItem(key));
    if (data) {
      let result = data.some((pokemone) => pokemone.id === item.id);
      if (result) {
        let filterData = data.filter((pokemone) => pokemone.id !== item.id);
        localStorage.setItem(key, JSON.stringify(filterData));
        setFavorites(filterData);
      } else {
        localStorage.setItem(key, JSON.stringify([...data, item]));
        setFavorites([...data, item]);
      }
    } else {
      localStorage.setItem(key, JSON.stringify([item]));
      setFavorites([item]);
    }
  };

  return [favorites, setAddRemovFavorites];
}
