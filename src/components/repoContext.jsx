import PropTypes from 'prop-types';
import { createContext, useState, useEffect, useCallback } from "react";

// Create a context to hold the repository data and related state
export const RepoContext = createContext();

export const RepoProvider = ({ children }) => {
  // State variables to manage data, loading status, error, user, and pagination
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState("elahmad03");
  const [page, setPage] = useState(1);
  const perPage = 10; // Number of repositories to fetch per page

  // Define a callback function to fetch repository data
  const fetchData = useCallback(() => {
    setLoading(true); // Set loading state to true before fetching data
    fetch(`https://api.github.com/users/${user}/repos?per_page=${perPage}&page=${page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok"); // Handle HTTP errors
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Set fetched data to state
        setLoading(false); // Set loading state to false after fetching data
      })
      .catch((error) => {
        setError(error); // Set error state if fetching fails
        setLoading(false); // Set loading state to false in case of error
      });
  }, [user, page]);

  // Fetch data whenever the fetchData callback changes
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    // Provide context values to the children components
    <RepoContext.Provider value={{ data, loading, error, page, setPage, fetchData, setUser }}>
      {children}
    </RepoContext.Provider>
  );
};

// Define prop types for RepoProvider
RepoProvider.propTypes = {
  children: PropTypes.node.isRequired, // Specify that children is a required prop of type node
};
