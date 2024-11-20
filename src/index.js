import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import App from './pages/App';
import Profile from './pages/profile';
import Footer from './pages/footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/profile', element: <Profile /> },
  { path: '/footer', element: <Footer />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);