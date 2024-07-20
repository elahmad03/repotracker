import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="bg-blue-700 dark:bg-black text-white p-4 shadow-md mt-10">
    <div className="container mx-auto flex justify-between items-center">
      <p>&copy; 2024 Repotracker</p>
      <div className="flex space-x-4">
        <a href="https://github.com/elahmad03" target="_blank" rel="noopener noreferrer" className="hover:underline">
          <div className="bg-gradient-to-tr from-white to-opacity-0 rounded p-2">
            <FontAwesomeIcon icon={faGithub} className="text-black" />
          </div>
        </a>
        <a href="https://linkedin.com/in/elahmad" target="_blank" rel="noopener noreferrer" className="hover:underline">
          <div className="bg-gradient-to-tr from-white to-opacity-0 rounded p-2">
            <FontAwesomeIcon icon={faLinkedin} className="text-black" />
          </div>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
