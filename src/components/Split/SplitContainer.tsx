import React from "react";
import "../../styles/Split/SplitContainer";

export const SplitContainer = ({ children }) => {
  return (
    <div className="split">
      <div className="split__screen">
        <div className="split__content">{children}</div>
      </div>
    </div>
  );
};

export default SplitContainer;
