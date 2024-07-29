
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4">
      <div className="bg-red-500 dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-lg font-medium mb-4">Page Not Found</p>
        <p className="text-md">
          Sorry, the page youre looking for doesnt exist. You can go back to the 
          <a href="/" className="text-blue-500"> home page</a>.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
