import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RepoProvider } from './components/repoContext';
import Home from './pages/home';
import Details from './pages/details';
import ErrorPage from './error-page';
import NotFound from './notFound';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "repoDetails/:repoId",
    element: <Details />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",  
    element: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RepoProvider>
      <RouterProvider router={router} />
    </RepoProvider>
  </React.StrictMode>,
);
