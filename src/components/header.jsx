import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DarkMode, LightMode } from "@mui/icons-material";
import SignInModal from "./signInModal";
import SigninLink from "./signinLink";
import NotsigninLink from "./notsigninLink";
import PropTypes from "prop-types";


const Header = ({ isSignedIn, onSignOut, onSignIn }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle dark mode and update the state
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Set initial dark mode state based on document class
  useEffect(() => {
    const currentMode = document.documentElement.classList.contains("dark");
    setIsDarkMode(currentMode);
  }, []);

  return (
    <header className="bg-blue-700 dark:bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Repotracker</h1>
          <Link to="/" className="text-white">Home</Link>
        </div>
        <div className="flex items-center">
          {isSignedIn ? 
            <SigninLink onSignOut={onSignOut} />
           : 
            <NotsigninLink onOpenModal={() => setIsModalOpen(true)} />
          }
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 bg-blue-500 dark:bg-gray-800 rounded focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <DarkMode /> : <LightMode />}
          </button>
        </div>
      </div>
      <SignInModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSignIn={onSignIn}
      />
    </header>
  );
};
// PropTypes for validation
NotsigninLink.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};
SigninLink.propTypes = {
  onSignOut: PropTypes.func.isRequired,
};
export default Header;
