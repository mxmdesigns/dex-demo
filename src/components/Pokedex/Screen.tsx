import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "../../styles/Pokedex/Screen";

type ScreenType = {
  on: boolean;
};

export const Screen = ({ pokemon, on, showLoading }) => {
  const [showScreen, setShowScreen] = useState<boolean>(false);
  const [showTransition, setShowTransition] = useState<boolean>(false);
  const screenClasses = classNames("screen-on", { active: showTransition });

  useEffect(() => {
    if (on) {
      setShowScreen(true);
      setTimeout(() => {
        setShowTransition(true);
      }, 10);
    } else {
      setShowTransition(false);
      setTimeout(() => setShowScreen(false), 500);
    }
  }, [on]);

  return (
    <div className="screen">
      {showLoading && <div className="loader"></div>}
      <div className="screen-off">Power on device</div>
      {showScreen && (
        <div className={screenClasses}>
          {pokemon.map((mon, i) => (
            <div key={mon.name + i}>{mon.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Screen;
