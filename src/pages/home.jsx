import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState('elahmad03');

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data fetched:', data);
        setData(data);
        setLoading(false);
        
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">{user} repositories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-gray-900 font-bold">{item.language}</p>
            <p className="text-gray-900 font-bold">{item.created_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
