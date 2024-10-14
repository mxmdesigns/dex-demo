import classNames from "classnames";
import React from "react";
import "../../styles/Pokedex/PowerButton";

export const PowerButton = ({ on, onClick }) => {
  const buttonClasses = classNames("power-button", { active: on });
  const sliderClasses = classNames("power-button__slider", { active: on });

  return (
    <div onClick={onClick} className={buttonClasses}>
      <div className={sliderClasses}></div>
    </div>
  );
};

export default PowerButton;
