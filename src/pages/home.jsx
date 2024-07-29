import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RepoContext } from "../components/repoContext";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = () => {
  const { data, loading, error, page, setPage, setUser } = useContext(RepoContext);

  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    let filtered = data;
    if (filter) {
      filtered = filtered.filter((repo) => repo.language === filter);
    }
    if (search) {
      filtered = filtered.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredData(filtered);
  }, [data, filter, search]);

  const handleSignIn = (username) => {
    setIsSignedIn(true);
    setUser(username);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUser("elahmad03");
  };

  if (loading) {
    return <div className="text-center mt-10 text-blue-800 dark:text-gray-300">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-600 dark:text-red-400">
        Error: {error.message}
      </div>
    );
  }

  const uniqueLanguages = [
    ...new Set(data.map((repo) => repo.language).filter(Boolean)),
  ];

  return (
    <>
      <Header
        isSignedIn={isSignedIn}
        onSignOut={handleSignOut}
        onSignIn={handleSignIn}
      />
      <main className="container mx-auto mt-10 p-4 bg-blue-600 dark:bg-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-100 dark:text-blue-200">Repositories</h1>
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className="bg-blue-500 dark:bg-gray-700 text-white p-2 rounded shadow-md w-full max-w-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-blue-200 dark:text-blue-400" htmlFor="filter">
            Filter by Language
          </label>
          <select
            name="filter"
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            className="bg-blue-500 dark:bg-gray-700 shadow-md appearance-none border-none rounded w-full py-2 px-3 text-white dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">All Languages</option>
            {uniqueLanguages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <article
              key={item.id}
              className="bg-blue-500 dark:bg-gray-700 p-4 shadow-md rounded-lg"
              role="region"
              aria-labelledby={`repo-${item.id}`}
            >
              <Link
                to={`/repoDetails/${item.id}`}
                className="text-blue-100 dark:text-blue-300 mt-2 inline-block"
              >
                {item.name}
              </Link>
              <p className="text-blue-200 dark:text-gray-300">{item.description}</p>
              <p className="text-blue-300 dark:text-gray-200 font-bold">{item.language}</p>
              <p className="text-blue-300 dark:text-gray-400 font-bold">
                {new Date(item.created_at).toLocaleDateString()}
              </p>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handlePrevPage}
            className="bg-blue-500 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow-md mx-2 disabled:opacity-50"
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="py-2 px-4 text-blue-100 dark:text-gray-200">Page {page}</span>
          <button
            onClick={handleNextPage}
            className="bg-blue-500 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow-md mx-2 disabled:opacity-50"
            disabled={filteredData.length < 10}
          >
            Next
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
