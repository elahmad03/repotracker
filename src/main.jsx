import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RepoProvider } from './pages/repoContext';
import Home from './pages/home';
import Details from './pages/details';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "repoDetails/:repoId",
    element: <Details />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RepoProvider>
      <RouterProvider router={router} />
    </RepoProvider>
  </React.StrictMode>,
);
