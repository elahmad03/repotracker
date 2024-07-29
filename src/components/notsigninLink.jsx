import PropTypes from 'prop-types';

const NotsigninLink = ({ onOpenModal }) => {
  return (
    <button
      onClick={onOpenModal}
      className="ml-4 bg-green-500 text-white py-2 px-4 rounded"
    >
      Sign In
    </button>
  );
};

NotsigninLink.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default NotsigninLink;
