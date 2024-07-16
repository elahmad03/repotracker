import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RepoContext } from "./repoContext";

const Home = () => {
  const { data, loading, error, page, setPage } = useContext(RepoContext);

  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");

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
    if (filter) {
      setFilteredData(data.filter((repo) => repo.language === filter));
    } else {
      setFilteredData(data);
    }
  }, [data, filter]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;
  }

  const uniqueLanguages = [...new Set(data.map((repo) => repo.language).filter(Boolean))];

  return (
    <main className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Repositories</h1>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="filter">
          Filter by Language
        </label>
        <select
          name="filter"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <article key={item.id} className="bg-white p-4 shadow-md rounded-lg" role="region" aria-labelledby={`repo-${item.id}`}>
            <h2 id={`repo-${item.id}`} className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-gray-900 font-bold">{item.language}</p>
            <p className="text-gray-900 font-bold">{new Date(item.created_at).toLocaleDateString()}</p>
            <Link to={`/repoDetails/${item.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
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
        <span className="py-2 px-4">Page {page}</span>
        <button
          onClick={handleNextPage}
          className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2 ${
            filteredData.length < 10 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={filteredData.length < 10}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Home;
