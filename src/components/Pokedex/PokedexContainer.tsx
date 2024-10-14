import React from "react";
import "../../styles/Pokedex/PokedexContainer";

export const PokedexContainer = ({ children }) => {
  return <div className="case">{children}</div>;
};

export default PokedexContainer;
