import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RepoContext } from "../components/repoContext";
import Header from "../components/header";
import Footer from "../components/footer";

const Details = () => {
  const { repoId } = useParams();
  const { data } = useContext(RepoContext);
  const [repository, setRepository] = useState(null);

  useEffect(() => {
    const repo = data.find((repo) => repo.id.toString() === repoId);
    setRepository(repo);
  }, [data, repoId]);

  if (!repository) {
    return <div className="text-center mt-10">Repository not found</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 p-4">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">
          {repository.name}
        </h1>
        <div className="bg-blue-500 dark:bg-black p-6 shadow-md rounded-lg">
          <p className="text-white mb-2">{repository.description}</p>
          <div className="flex justify-between mb-4">
            <p
              className="text-white
             font-bold"
            >
              Author: {repository.author}
            </p>
            <p className="text-gray-100 font-bold">
              Language: {repository.language}
            </p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-white font-bold">
              Created at: {new Date(repository.created_at).toLocaleDateString()}
            </p>
            <p className="text-white font-bold">Issues: {repository.open_issues_count}</p>
          </div>
          <p className="text-white font-bold">Stars: {repository.stargazers_count}</p>
          <p className="text-white font-bold">Forks: {repository.forks_count}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
