// signinLink.js
import PropTypes from 'prop-types';

const SigninLink = ({ onSignOut }) => {
  return (
    <button
      onClick={onSignOut}
      className="ml-4 bg-red-500 text-white py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
};

SigninLink.propTypes = {
  onSignOut: PropTypes.func.isRequired,
};

export default SigninLink;
