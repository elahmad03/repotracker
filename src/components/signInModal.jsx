import { useState } from "react";

const SignInModal = ({ isOpen, onClose, onSignIn }) => {
  const [username, setUsername] = useState("");

  const handleSignIn = () => {
    onSignIn(username);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-blue-500  dark:bg-gray-900 p-6 rounded shadow-lg w-96">
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

export default SignInModal;
