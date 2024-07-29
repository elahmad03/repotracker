
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  // Fetch error from the router
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4">
      <div className="bg-blue-500 dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">Oops!</h1>
        <p className="text-lg font-medium mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-md italic">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
