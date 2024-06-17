import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import UserMenu from "./UserMenu/UserMenu";

interface HeaderProps {
  onLogout: () => void;
  isRightMenuOpen: boolean;
  setIsRightMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  onLogout,
  isRightMenuOpen,
  setIsRightMenuOpen,
}) => {
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);

  const handleUserPicClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsRightMenuOpen(!isRightMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsRightMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsRightMenuOpen]);

  return (
    <div className="header-container">
      <div className="header">
        <div className="user-pic" onClick={handleUserPicClick}>
          {photoUrl ? (
            <img src={photoUrl} alt="Profile" className="circular-photo" />
          ) : (
            <div className="circular-photo-placeholder" />
          )}
        </div>
      </div>
      {isRightMenuOpen && (
        <div ref={menuRef} onClick={(event) => event.stopPropagation()}>
          <UserMenu onLogout={onLogout} />
        </div>
      )}
    </div>
  );
};

export default Header;
