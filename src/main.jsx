import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './routes/Main';
import Home from './Pages/Home';
import { createTheme, ThemeProvider } from '@mui/material';
import AuthProvider from './Auth/AuthProvider';
import Login from './Pages/Login';
import Register from './Pages/Register';
const theme = createTheme({
  typography: {
    fontFamily: ['Asap', 'sans-serif'].join(','),
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
