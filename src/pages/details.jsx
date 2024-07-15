// src/Details.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { repoId } = useParams();
  const [repository, setRepository] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repositories/${repoId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRepository(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [repoId]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;
  }

  if (!repository) {
    return <div className="text-center mt-10">Repository not found</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">{repository.name}</h1>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <p className="text-gray-700">{repository.description}</p>
        <p className="text-gray-900 font-bold">Language: {repository.language}</p>
        <p className="text-gray-900 font-bold">Created at: {new Date(repository.created_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Details;
