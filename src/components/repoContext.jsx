import { createContext, useState, useEffect, useCallback } from "react";

export const RepoContext = createContext();

export const RepoProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState("elahmad03");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const fetchData = useCallback(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${user}/repos?per_page=${perPage}&page=${page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [user, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <RepoContext.Provider value={{ data, loading, error, page, setPage, fetchData, setUser }}>
      {children}
    </RepoContext.Provider>
  );
};
