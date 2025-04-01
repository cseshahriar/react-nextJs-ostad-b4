import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/** sidebar header */}
      <a href="/">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src="./vite.svg" alt="logo" />
          </div>
          <div className="sidebar-logo-text">
            <h1 className="flex text-xl space-x-1">
              <span className="font-bold text-amber-400">Ostad</span>
              <span className="font-bold text-black">RTDASH</span>
            </h1>
          </div>
        </div>
      </a>
    </aside>
  );
};

export default Sidebar;
