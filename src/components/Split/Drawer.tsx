import classNames from "classnames";
import React from "react";
import "../../styles/Split/Drawer";

type DrawerProps = {
  content?: React.ReactNode | null;
  title: string | null;
  setDrawer: (_) => void;
};

export const Drawer = ({ content, title, setDrawer }: DrawerProps) => {
  const drawerClasses = classNames("drawer", { open: content && title });

  const closeDrawer = (e) => {
    if (e.target === e.currentTarget) {
      setDrawer(null);
    }
  };

  return (
    <div onClick={closeDrawer} className={drawerClasses}>
      <div className="drawer__content">
        <div className="drawer__content-header">
          <span>{title}</span>
          <button onClick={closeDrawer}>X</button>
        </div>
        <div className="drawer__content-wrapper">{content}</div>
      </div>
    </div>
  );
};

export default Drawer;
