import React, { useEffect, useState } from "react";
import PokedexContainer from "../components/Pokedex/PokedexContainer";
import PowerButton from "../components/Pokedex/PowerButton";
import Screen from "../components/Pokedex/Screen";
import fetchAllPokemon from "../services/pokeService";

type PokemonType = {
  name: string;
  types: string[];
};

const LIMIT = 10;

export const Pokedex = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [updating, setUpdating] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<PokemonType[]>([]);
  const [fetchedPokemonNames, setFetchedPokemonNames] = useState(new Set());
  const [hasMorePokemon, setHasMorePokemon] = useState(true);
  const [selected, setSelected] = useState<number>(0);
  const [isOn, setIsOn] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const getAllPokemon = async () => {
      console.log(fetchedPokemonNames);
      if (!hasMorePokemon || updating) return;

      setUpdating(true);

      try {
        const allPokemon = await fetchAllPokemon(LIMIT, (page - 1) * LIMIT);

        const uniquePokemon = allPokemon.results.filter(
          (p) => !fetchedPokemonNames.has(p.name)
        );

        if (allPokemon.results.length < LIMIT) {
          setHasMorePokemon(false);
        }

        setPokemon((prevPokemon) => [...prevPokemon, ...uniquePokemon]);

        setFetchedPokemonNames((prevNames) => {
          const newNames = new Set(prevNames);
          uniquePokemon.forEach((p) => newNames.add(p.name));
          return newNames;
        });
      } catch (err) {
        console.log(err);
      } finally {
        setUpdating(false);
        setLoading(false);
      }
    };

    getAllPokemon();
  }, []);

  const handlePower = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsOn(!isOn);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <PokedexContainer>
      <Screen pokemon={pokemon} showLoading={loading} on={!loading && isOn} />
      <PowerButton on={isOn} onClick={handlePower} />
      <div className="buttons"></div>
    </PokedexContainer>
  );
};

export default Pokedex;
