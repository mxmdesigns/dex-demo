import React, { useState } from "react";
import "../../styles/Split/Menu";
import Settings from "./Settings";

export const Menu = ({
  useSampleData,
  setUseSampleData,
  mode,
  setMode,
  setModal,
}) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  return (
    <div className="menu">
      {showSettings ? (
        <Settings
          useSampleData={useSampleData}
          setUseSampleData={setUseSampleData}
          setShowSettings={setShowSettings}
          mode={mode}
          setMode={setMode}
        />
      ) : (
        <>
          <button onClick={() => setModal("payment")} className="menu__button">
            Add Payment
          </button>
          <button onClick={() => setModal("user")} className="menu__button">
            Add User
          </button>
          <button
            className="menu__button"
            onClick={() => setShowSettings(true)}
          >
            Settings
          </button>
        </>
      )}
    </div>
  );
};

export default Menu;
