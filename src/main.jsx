import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrivateApp } from './privateApp.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './lib/context/auth-context.jsx';
import RequireAuth from './lib/require-auth.jsx';

const withAuthProvider = (Component, requireAuth = false,) => {
  return (
    <AuthProvider>
      {requireAuth ? (
        <RequireAuth>
          <Component />
        </RequireAuth>
      ) : (
        <Component />
      )}
    </AuthProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/private",
    element: <PrivateApp />,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

