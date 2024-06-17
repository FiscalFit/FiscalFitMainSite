import React from "react";
import "./UserMenu.css";

interface SummaryMenuProps {
  onLogout: () => void;
}

const SummaryMenu: React.FC<SummaryMenuProps> = ({ onLogout }) => {
  return (
    <ul className="right-side-menu">
      <li>Профіль</li>
      <li onClick={onLogout}>Вихід</li>
    </ul>
  );
};

export default SummaryMenu;
