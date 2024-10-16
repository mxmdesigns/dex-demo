import React from "react";
import classNames from "classnames";

export const Settings = ({
  useSampleData,
  setUseSampleData,
  setShowSettings,
  mode,
  setMode,
}) => {
  return (
    <div className="menu__settings">
      <div className="menu__settings-option">
        <label>Use sample data?</label>
        <button onClick={() => setUseSampleData(!useSampleData)}>
          <div className={classNames({ active: useSampleData })} />
        </button>
      </div>
      <div className="menu__settings-option">
        <label>Dark mode?</label>
        <button onClick={() => setMode(!mode)}>
          <div className={classNames({ active: mode })} />
        </button>
      </div>
      <button
        onClick={() => setShowSettings(false)}
        className="menu__settings-close"
      >
        Close settings
      </button>
    </div>
  );
};

export default Settings;
