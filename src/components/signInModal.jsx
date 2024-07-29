import { useState } from "react";
import PropTypes from "prop-types";
import CloseIcon from '@mui/icons-material/Close';

/**
 * SignInModal component
 *
 * This component displays a modal for user sign-in. It contains an input field for the username, a button
 * to trigger the sign-in process, and an icon to close the modal. The modal is conditionally rendered based on the `isOpen` prop.
 */
const SignInModal = ({ isOpen, onClose, onSignIn }) => {
  // State to manage the username input field and validation message
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle the sign-in process
  const handleSignIn = () => {
    // Validate the username
    if (username.length < 6) {
      setErrorMessage("Username must be at least 6 characters long");
      return;
    }

    // Clear the error message and proceed with sign-in
    setErrorMessage("");
    onSignIn(username); // Call the onSignIn function with the username
    onClose(); // Close the modal
  };

  // If the modal is not open, return null to avoid rendering anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 px-4">
      <div className="bg-blue-500 dark:bg-gray-900 p-6 rounded shadow-lg w-full max-w-md relative">
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          <CloseIcon />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSignIn}
            className="bg-blue-700 text-white py-2 px-4 rounded"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

// PropTypes for validation
SignInModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};

export default SignInModal;
