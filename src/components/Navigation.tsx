import React from "react";
import { useLocation } from "react-router";
import "../styles/Navigation";
import classNames from "classnames";

export const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <div className="navigation">
      <a className="home-button" href="/">
        Home
      </a>
      <nav>
        <a
          href="/pokedex"
          className={classNames({ active: pathname === "/pokedex" })}
        >
          Pokedex
        </a>
        <>|</>
        <a
          href="/split"
          className={classNames({ active: pathname === "/split " })}
        >
          Split
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
