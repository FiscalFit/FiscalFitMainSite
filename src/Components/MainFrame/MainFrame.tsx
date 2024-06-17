import React from "react";
import Header from "./Header/Header";

interface MainFrameProps {
  onLogout: () => void;
  isRightMenuOpen: boolean;
  setIsRightMenuOpen: (isOpen: boolean) => void;
}

const MainFrame: React.FC<MainFrameProps> = ({
  onLogout,
  isRightMenuOpen,
  setIsRightMenuOpen,
}) => {
  return (
    <div className="main-frame">
      <Header
        onLogout={onLogout}
        isRightMenuOpen={isRightMenuOpen}
        setIsRightMenuOpen={setIsRightMenuOpen}
      />
    </div>
  );
};

export default MainFrame;
