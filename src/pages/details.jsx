import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RepoContext } from "./repoContext";

const Details = () => {
  const { repoId } = useParams();
  const { data } = useContext(RepoContext);
  const [repository, setRepository] = useState(null);

  useEffect(() => {
    const repo = data.find(repo => repo.id.toString() === repoId);
    setRepository(repo);
  }, [data, repoId]);

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
