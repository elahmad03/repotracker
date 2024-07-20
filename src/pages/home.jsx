import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RepoContext } from "../components/repoContext";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = () => {
  const { data, loading, error, page, setPage } = useContext(RepoContext);

  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState("elahmad03");

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
    setUsername(username);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUsername("elahmad03");
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
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
      <main className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">Repositories</h1>
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className="bg-blue-500 mb-10 p-2 text-white rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="filter">
            Filter by Language
          </label>
          <select
            name="filter"
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            className="bg-blue-500 dark:bg-black shadow-md appearance-none border-none rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">All Languages</option>
            {uniqueLanguages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredData.map((item) => (
            <article
              key={item.id}
              className="bg-blue-500 dark:bg-black p-4 shadow-md rounded-lg"
              role="region"
              aria-labelledby={`repo-${item.id}`}
            >
              <Link
                to={`/repoDetails/${item.id}`}
                className="text-white mt-2 inline-block"
              >
                {item.name}
              </Link>
              <p className="text-gray-200">{item.description}</p>
              <p className="text-gray-300 font-bold">{item.language}</p>
              <p className="text-gray-400 font-bold">
                {new Date(item.created_at).toLocaleDateString()}
              </p>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handlePrevPage}
            className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2 ${
              page === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="py-2 px-4 text-white">Page {page}</span>
          <button
            onClick={handleNextPage}
            className={`bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2 ${
              filteredData.length < 10 ? "opacity-50 cursor-not-allowed" : ""
            }`}
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
