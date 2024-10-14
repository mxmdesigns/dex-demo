const BASE_URL = "https://pokeapi.co/api/v2/";

export const fetchAllPokemon = async (limit = 10, offset = 0) => {
  const response = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}.json`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Pokemon");
  }
  return response.json();
};

export default fetchAllPokemon;
