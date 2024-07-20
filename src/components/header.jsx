import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DarkMode, LightMode } from "@mui/icons-material";
import SignInModal from "./signInModal";

const Header = ({ isSignedIn, onSignOut, onSignIn }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const currentMode = document.documentElement.classList.contains("dark");
    setIsDarkMode(currentMode);
  }, []);

  return (
    <header className="bg-blue-500 dark:bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Repotracker</h1>
          <Link to="/" className="text-white">Home</Link>
        </div>
        <div className="flex items-center">
          {isSignedIn ? (
            <button
              onClick={onSignOut}
              className="ml-4 bg-red-500 text-white py-2 px-4 rounded"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="ml-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              Sign In
            </button>
          )}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 bg-blue-500 dark:bg-black rounded focus:outline-none"
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

export default Header;
