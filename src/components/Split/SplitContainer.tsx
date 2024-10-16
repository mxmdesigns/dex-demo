import classNames from "classnames";
import React from "react";
import "../../styles/Split/SplitContainer";

export const SplitContainer = ({ children, mode }) => {
  const modeClass = classNames("split", { dark: mode, light: !mode });

  return (
    <div className={modeClass}>
      <div className="split__screen">
        <div className="split__content">{children}</div>
      </div>
    </div>
  );
};

export default SplitContainer;
